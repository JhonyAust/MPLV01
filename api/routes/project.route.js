import express from 'express';
import {
  createProject,
  getAllProjects,
  getProject,
  updateProject,
  deleteProject
} from '../controllers/project.controller.js';

const router = express.Router();

router.post('/create', createProject);
router.get('/getAll', getAllProjects);
router.get('/:id', getProject);
router.put('update/:id', updateProject);
router.delete('/:id', deleteProject);

export default router;
