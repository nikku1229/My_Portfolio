import emailjs from "emailjs-com";

export const formSubmit = async (data) => {
  console.log(data);

  if (!data.email || !data.reason) {
    alert("Required filed needed");
    return;
  }

  try {
    const sendToMe = {
      reason: data.reason,
      subject: data.subject,
      name: data.name,
      email: data.email,
      budget: data.budget,
      department: data.department,
      company_name: data.company_name,
      desc: data.desc || data.message,
    };

    const sendToUser = {
      email: data.email,
    };

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMP_ID_ME,
      sendToMe,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMP_ID_USER,
      sendToUser,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );
  } catch (err) {
    console.error(err);
  }
};
