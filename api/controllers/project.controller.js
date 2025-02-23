import Project from "../models/project.model.js";
// Create a new project
export const createProject = async (req, res) => {
  try {
    const { title, name, type, address, atAGlance, projectStatus, featuresAndAmenities, imageUrl } = req.body;

    // Validate required fields
    if (!title ||  !type || !address || !projectStatus) {
      return res.status(400).json({ message: 'Title, type, address, and project status are required' });
    }

    const newProject = new Project({
      title,
      name,
      type,
      address,
      atAGlance,
      projectStatus,
      featuresAndAmenities,
      imageUrl
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ message: 'Error creating the project', error: error.message });
  }
};

// Get all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error: error.message });
  }
};

// Get a specific project
export const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching the project', error: error.message });
  }
};

// Update a project
export const updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProject) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: 'Error updating the project', error: error.message });
  }
};

// Delete a project
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting the project', error: error.message });
  }
};
