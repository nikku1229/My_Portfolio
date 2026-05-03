import Likes from "../models/Likes.js";

export const getLikes = async (req, res) => {
  try {
    let data = await Likes.findOne();

    if (!data) data = await Likes.create({ totalLikes: 0 });

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Error" });
  }
};

export const addLikes = async (req, res) => {
  try {
    let data = await Likes.findOne();

    if (!data) {
      data = await Likes.create({ totalLikes: 0 });
    }

    data.totalLikes += 1;
    await data.save();

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Internal Error" });
  }
};
