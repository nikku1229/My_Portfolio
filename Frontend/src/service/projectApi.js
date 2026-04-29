import API from "./api.js";

export const getProjects = async () => {
  try {
    const res = await API.get("/projects", {
      headers: {
        verify_portfolio_key: import.meta.env.VITE_SECRET_VERIFY_KEY,
      },
    });

    return res.data.data;
  } catch (err) {
    console.error(err);
  }
};
