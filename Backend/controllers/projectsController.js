import Projects from "../models/Projects.js";

// 👉 GET all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Projects.find().sort({ order: 1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching projects",
      error: error.message,
    });
  }
};

// 👉 ADD new project
export const addProjects = async (req, res) => {
  try {
    const {
      projectName,
      projectDesc,
      githubLink,
      liveLink,
      features,
      techStacks,
      order,
      featured,
    } = req.body;

    if (!projectName || !projectDesc) {
      return res.status(400).json({
        success: false,
        message: "Project name and description are required",
      });
    }

    const newProject = await Projects.create({
      projectName,
      projectDesc,
      githubLink,
      liveLink,
      features,
      techStacks,
      order,
      featured,
    });

    res.status(201).json({
      success: true,
      message: "Project added successfully",
      data: newProject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding project",
      error: error.message,
    });
  }
};

// 👉 DELETE project
export const deleteProjects = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Projects.findByIdAndDelete(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting project",
      error: error.message,
    });
  }
};

// 👉 UPDATE project
export const updateProjects = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedProject = await Projects.findByIdAndUpdate(id, req.body, {
      new: true, // updated data return karega
      runValidators: true,
    });

    if (!updatedProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: updatedProject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating project",
      error: error.message,
    });
  }
};
