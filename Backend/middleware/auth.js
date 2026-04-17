const verifyKey = async (req, res, next) => {
  const key = req.headers["verify_portfolio_key"];

  if (key !== process.env.SECRET_VERIFY_KEY) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  next();
};

export default verifyKey;
