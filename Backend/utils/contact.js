import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const mailHandler = async (req, res) => {
  const {
    name,
    email,
    desc,
    message,
    department,
    budget,
    subject,
    company_name,
    reason,
  } = req.body;

  if (!email || !reason)
    return res.status(404).json({ message: "Required field missing" });

  try {
    const msgToYou = {
      to: "niteshsharma5740@gmail.com",
      from: process.env.FROM_EMAIL,
      subject: `New Contact Form Portfolio - ${reason}`,
      text: `
      ${reason ? `Reason of Contact: ${reason}` : ""}
      ${name ? `Name: ${name}` : ""}
      ${email ? `Email: ${email}` : ""}
      ${department ? `Department: ${department}` : ""}
      ${budget ? `Budget: ${budget}` : ""}
      ${subject ? `Subject: ${subject}` : ""}
      ${company_name ? `Company Name: ${company_name}` : ""}
      ${desc ? `Description: ${desc}` : ""}
      ${message ? `Message: ${message}` : ""}
      `,
    };

    const msgToUser = {
      to: email,
      from: process.env.FROM_EMAIL,
      subject: "Thanks for contacting me!",
      text: `Hi ${name || "there"}, Thank you for reaching out. I will get back to you soon!`,
    };

    await sgMail.send(msgToYou);
    await sgMail.send(msgToUser);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Email failed" });
  }
};
