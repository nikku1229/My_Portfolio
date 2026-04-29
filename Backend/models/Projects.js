import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
      trim: true,
    },
    projectDesc: {
      type: String,
      require: true,
    },
    githubLink: {
      type: String,
      default: null,
    },
    liveLink: {
      type: String,
      default: null,
    },
    features: {
      type: [String],
      default: [],
    },
    techStacks: {
      frontend: {
        type: [String],
        default: [],
      },
      backend: {
        type: [String],
        default: [],
      },
      database: {
        type: [String],
        default: [],
      },
      deployment: {
        type: [String],
        default: [],
      },
    },
    order: {
      type: Number,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Projects = mongoose.model("Projects", ProjectSchema);
export default Projects;
