import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return Response.json(
        {
          error: "Semua field wajib diisi.",
        },
        {
          status: 400,
        },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["jamaludin032000@gmail.com"],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Pesan Baru dari Portfolio</h2>

          <p><strong>Nama:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Subject:</strong> ${subject}</p>

          <hr />

          <h3>Message</h3>

          <p style="white-space: pre-wrap;">
            ${message}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          error: "Gagal mengirim email.",
        },
        {
          status: 500,
        },
      );
    }

    return Response.json({
      success: true,
      message: "Pesan berhasil dikirim.",
      data,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        error: "Terjadi kesalahan pada server.",
      },
      {
        status: 500,
      },
    );
  }
}