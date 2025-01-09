import SideBar from "./components/SideBar";
import Project from "./components/Project";
import ProjectInfo from "./components/ProjectInfo";
import { useState,useRef} from "react";


function App() {

  const [addProject,setAddProject] = useState(0);
  const [projects,setProjects] = useState([]);
  const currentProject = useRef({});

  function addToProject(projectTitle,projectDescription,projectDate)
  {
    const newProject = {
      title:projectTitle,
      description:projectDescription,
      date:projectDate
    }

    const newProjects = [...projects,newProject];
    setProjects(newProjects);
  }
  
  function deleteFromProject(index)
  {
    const newProjects = [];
    for(let i = 0; i < projects.length; i++)
    {
      if(i === index)
      continue;

      newProjects.push(projects[i]);
    }

    setProjects(newProjects);
    setAddProject(0);
  }


  

  function handleClick(index)
  {
    currentProject.current.data = index;
    setAddProject(index + 2);
  }

  



  return (
    <>
      <SideBar projects = {projects} handleClick={handleClick} setAddProject={setAddProject}/>
      
      {(addProject === 0) && <div class="sm:ml-40 h-screen flex flex-col items-center justify-center">
              <h2 class="text-2xl font-bold">No Project Selected</h2>
              <p class="mt-4">Select a project or get started with a new one</p>
              <button class="bg-gray-700 text-white rounded-md mt-4 px-4 py-3" onClick={() => setAddProject(1)}>Create new project</button>
      </div>}

    {(addProject === 1) && <Project addProject={addToProject} setAddProject = {setAddProject} />}

    {(addProject >= 2) && <ProjectInfo  index={currentProject.current.data} projects={projects} setProjects={setProjects} deleteFromProject = {deleteFromProject}/>}

    </>
  );
}

export default App;
