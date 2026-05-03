import API from "./api";

export const formSubmit = async (data) => {
  try {
    const res = await API.post("/contact", data, {
      headers: {
        verify_portfolio_key: import.meta.env.VITE_SECRET_VERIFY_KEY,
      },
    });

    return res.data;
  } catch (err) {
    console.error(err);
  }
};
