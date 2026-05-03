import API from "./api.js";

export const getLike = async () => {
  try {
    const res = await API.get("/likes", {
      headers: {
        verify_portfolio_key: import.meta.env.VITE_SECRET_VERIFY_KEY,
      },
    });

    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const addLike = async () => {
  try {
    const res = await API.post(
      "/likes",
      {},
      {
        headers: {
          verify_portfolio_key: import.meta.env.VITE_SECRET_VERIFY_KEY,
        },
      },
    );

    return res.data;
  } catch (err) {
    console.error(err);
  }
};
