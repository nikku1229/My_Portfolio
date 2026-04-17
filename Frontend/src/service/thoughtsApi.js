import API from "./api";

export const getThoughts = async () => {
  try {
    const res = await API.get("/thoughts", {
      headers: {
        verify_portfolio_key: import.meta.env.VITE_SECRET_VERIFY_KEY,
      },
    });

    return res.data;
  } catch (err) {
    console.error(err);
  }
};
