import { createHash } from "node:crypto";

// Netlify Function que suscribe un email en Mailchimp. El formulario de la
// portada la llama directamente por fetch al enviarse (ver index.astro).
//
// Necesita 3 variables de entorno configuradas en Netlify (nunca en el
// código): MAILCHIMP_API_KEY, MAILCHIMP_SERVER_PREFIX, MAILCHIMP_AUDIENCE_ID.

interface NetlifyEvent {
  httpMethod: string;
  body: string | null;
}

interface NetlifyResponse {
  statusCode: number;
  body: string;
}

export const handler = async (event: NetlifyEvent): Promise<NetlifyResponse> => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  let email: unknown;
  try {
    email = (JSON.parse(event.body ?? "{}") as { email?: unknown }).email;
  } catch {
    return { statusCode: 400, body: "JSON inválido" };
  }

  if (typeof email !== "string" || !email.includes("@")) {
    return { statusCode: 400, body: "Email inválido" };
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!apiKey || !serverPrefix || !audienceId) {
    console.error(
      "Faltan variables de entorno de Mailchimp en Netlify (MAILCHIMP_API_KEY / MAILCHIMP_SERVER_PREFIX / MAILCHIMP_AUDIENCE_ID)",
    );
    return { statusCode: 500, body: "Mailchimp no configurado" };
  }

  // PUT sobre el hash MD5 del email (en minúsculas) es la forma que
  // recomienda Mailchimp para "crear o actualizar": si el email ya existe no
  // falla con un error de duplicado, simplemente lo deja como estaba.
  const subscriberHash = createHash("md5").update(email.toLowerCase()).digest("hex");
  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`;

  const mailchimpResponse = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // Mailchimp acepta Basic Auth con cualquier usuario; solo importa la contraseña (la API key).
      Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
    },
    body: JSON.stringify({ email_address: email, status_if_new: "subscribed" }),
  });

  if (!mailchimpResponse.ok) {
    const errorText = await mailchimpResponse.text();
    console.error("Mailchimp respondió con error", mailchimpResponse.status, errorText);
    return { statusCode: 502, body: "No se pudo suscribir en Mailchimp" };
  }

  return { statusCode: 200, body: "OK" };
};
