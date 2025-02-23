import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/Project/ProjectCard';
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch all projects from the API using the native fetch API
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/project/getAll');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto p-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
