import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Pastikan API key tersedia
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY belum dikonfigurasi.");

      return Response.json(
        {
          error: "Konfigurasi email server belum tersedia.",
        },
        {
          status: 500,
        }
      );
    }

    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    // Validasi field
    if (!name || !email || !subject || !message) {
      return Response.json(
        {
          error: "Semua field wajib diisi.",
        },
        {
          status: 400,
        }
      );
    }

    // Validasi email sederhana
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Response.json(
        {
          error: "Format email tidak valid.",
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Jamaludin Portfolio <onboarding@resend.dev>",

      // Email tujuan kamu
      to: ["jamaludin032000@gmail.com"],

      // Ketika kamu klik Reply di Gmail,
      // balasan akan diarahkan ke email pengunjung.
      replyTo: email,

      subject: `[Portfolio] ${subject}`,

      html: `
        <!DOCTYPE html>
        <html lang="id">
          <head>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />

            <title>Pesan dari Portfolio Jamaludin</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background: #0a0a0f;
              font-family: Arial, Helvetica, sans-serif;
              color: #ffffff;
            "
          >
            <div
              style="
                max-width: 680px;
                margin: 40px auto;
                padding: 32px;
                background: #111118;
                border: 1px solid #272733;
                border-radius: 16px;
              "
            >
              <h1
                style="
                  margin: 0 0 8px;
                  color: #e8c468;
                  font-size: 24px;
                "
              >
                Pesan Baru dari Portfolio
              </h1>

              <p
                style="
                  margin: 0 0 28px;
                  color: #9999a8;
                  font-size: 14px;
                "
              >
                Seseorang menghubungi Anda melalui website portfolio.
              </p>

              <div
                style="
                  padding: 20px;
                  background: #0a0a0f;
                  border-radius: 12px;
                  border: 1px solid #272733;
                "
              >
                <p style="margin: 0 0 14px;">
                  <strong style="color: #e8c468;">
                    Nama
                  </strong>
                  <br />
                  ${escapeHtml(name)}
                </p>

                <p style="margin: 0 0 14px;">
                  <strong style="color: #e8c468;">
                    Email
                  </strong>
                  <br />
                  ${escapeHtml(email)}
                </p>

                <p style="margin: 0 0 14px;">
                  <strong style="color: #e8c468;">
                    Subject
                  </strong>
                  <br />
                  ${escapeHtml(subject)}
                </p>

                <p style="margin: 0;">
                  <strong style="color: #e8c468;">
                    Message
                  </strong>

                  <br />
                  <br />

                  ${escapeHtml(message).replace(/\n/g, "<br />")}
                </p>
              </div>

              <p
                style="
                  margin: 28px 0 0;
                  color: #666675;
                  font-size: 12px;
                "
              >
                Pesan ini dikirim melalui contact form
                portfolio Jamaludin.
              </p>
            </div>
          </body>
        </html>
      `,
    });

    // Resend mengembalikan error
    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          error: "Email gagal dikirim.",
        },
        {
          status: 500,
        }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Pesan berhasil dikirim.",
        id: data?.id,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        error: "Terjadi kesalahan pada server.",
      },
      {
        status: 500,
      }
    );
  }
}

/**
 * Mencegah HTML injection
 * dari input user yang masuk ke email.
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}