interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const generateContactEmailHTML = ({ name, email, subject, message }: ContactEmailProps): string => {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nuevo Mensaje de Contacto</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
          background-color: #f4f4f4;
          color: #333;
          line-height: 1.6;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .header {
          background-color: #007bff;
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 8px 8px 0 0;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
        .content {
          padding: 20px;
        }
        .content h2 {
          color: #007bff;
          border-bottom: 2px solid #eeeeee;
          padding-bottom: 10px;
        }
        .field {
          margin-bottom: 15px;
        }
        .field strong {
          color: #555;
        }
        .message-box {
          background-color: #f9f9f9;
          border: 1px solid #dddddd;
          padding: 15px;
          border-radius: 5px;
          margin-top: 10px;
          white-space: pre-wrap;
          font-family: monospace;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          font-size: 12px;
          color: #888;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>My Experience App</h1>
        </div>
        <div class="content">
          <h2>Nuevo Mensaje de Contacto</h2>
          <div class="field">
            <strong>Nombre:</strong> ${name}
          </div>
          <div class="field">
            <strong>Email del remitente:</strong> <a href="mailto:${email}">${email}</a>
          </div>
          <div class="field">
            <strong>Asunto:</strong> ${subject}
          </div>
          <div class="field">
            <strong>Mensaje:</strong>
            <div class="message-box">
              ${message}
            </div>
          </div>
        </div>
        <div class="footer">
          <p>Este correo fue enviado desde el formulario de contacto de tu portafolio.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
