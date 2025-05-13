import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";

function App() {
  const [projectState,setProjectState] = useState({
    currentAction: "none",   //currentAction can be none if we are not doing anything, adding if we are adding a project and detailing if we are detailing a project
    selectedProjectId:undefined,
    projects: []
  })

  function handleSelectProject(project_id) {
    const newProjectState = {...projectState,currentAction:"view",selectedProjectId:project_id};
    setProjectState(newProjectState);
  }
  
  function handleAddStartProject() {
    const newProjectState = {...projectState,currentAction:"adding"}
    setProjectState(newProjectState)
  }

  function handleAddProject(title,description,dueDate)
  {
    const newProject = {
      id:Math.random(),
      title:title,
      description:description,
      dueDate:dueDate
    }

    const newProjectState = {...projectState,currentAction:"none",projects:[...projectState.projects,newProject]}
    setProjectState(newProjectState);
  }

  function handleCancelAddProject() {
    const newProjectState = {...projectState,currentAction:"none"};
    setProjectState(newProjectState)
  }

  function handleDeleteProject() {
    const newProjectState = {...projectState,currentAction:"none",
                              projects:projectState.projects.filter((project) => project.id !== projectState.selectedProjectId),
                              selectedProjectId:undefined};
    setProjectState(newProjectState);
  }

  console.log(projectState)

  let selectedProject = null

  if(projectState.currentAction == "view") {
    for(let project of projectState.projects) {
      if(project.id === projectState.selectedProjectId)
      {
        selectedProject = project;
        break;
      }
    }
  }

  console.log("selected project", selectedProject)
  
  return (
    <>
      <Sidebar sidebar_title="YOUR PROJECTS" button_title= "+ Add Project" projects = {projectState.projects} handleSelectProject = {handleSelectProject} handleAddStartProject = {handleAddStartProject} />
      {(projectState.currentAction == "none") && <MainPage handleAddStartProject = {handleAddStartProject} />}
      {(projectState.currentAction == "adding") && <NewProject handleAddProject = {handleAddProject} handleCancelAddProject = {handleCancelAddProject} />}
      {(projectState.currentAction == "view") && <SelectedProject projectDetails={selectedProject} handleDeleteProject = {handleDeleteProject}/>}
    </>
  );
}

export default App;
