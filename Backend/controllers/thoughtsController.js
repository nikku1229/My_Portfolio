import Thoughts from "../models/Thoughts.js";

export const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thoughts.find();

    res.status(200).json(thoughts);
  } catch (err) {
    res.status(400).json("Failed to fetch thoughts");
  }
};

export const addThoughts = async (req, res) => {
  try {
    const { content, createdBy } = req.body;
    if (!content)
      return res.status(400).json({ message: "Content is required" });

    const thought = await Thoughts.create({
      content,
      createdBy,
    });

    res.status(201).json({ message: "Thought added" });
  } catch (err) {
    res.status(400).json({ message: "Failed to add thoughts" });
  }
};

export const deleteThought = async (req, res) => {
  try {
    const thought = await Thoughts.findOneAndDelete({
      _id: req.params.id,
    });

    if (!thought) {
      return res.status(404).json({ message: "Thought not found" });
    }

    res.status(200).json({ message: "Delete successful" });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete" });
  }
};

export const updateThought = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    const updated = await Thoughts.findOneAndUpdate(
      { _id: id },
      { $set: { content } },
      { returnDocument: "after" },
    );

    if (!updated) return res.status(404).json({ message: "Thought not found" });

    res.status(200).json({ message: "Update Successful" });
  } catch (err) {
    res.status(400).json({ message: "Failed to Update" });
  }
};
