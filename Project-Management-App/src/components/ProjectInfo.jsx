import { useRef } from "react";

export default function ProjectInfo({index,projects,setProjects,deleteFromProject}) {
    const taskData = useRef();
    if(projects[index] && projects[index].tasks === undefined)
    {
        projects[index].tasks = [];
    }

    const project = (projects[index] ? projects[index] : []);
    const tasks = (project.tasks ? project.tasks : []);

    function addTask(task)
    {
       const newProjects = [];
       for(let i = 0; i < projects.length; i++)
       {
            if(i == index)
            {
                projects[index].tasks.push(task)
            }
            newProjects.push(projects[i]);    
       }

       setProjects(newProjects);

    }

    function handleClick()
    {
        deleteFromProject(index);
    }



    return(
        <div class="sm:ml-96 mt-20  h-screen">
            <div class="flex">
                <h1 class="font-bold text-3xl">{project.title}</h1>
                <button class="ml-96 bg-slate-950 text-white rounded-md  p-2" onClick={handleClick}>Delete</button>
            </div>
            <p class="font-light mt-4">{project.date}</p>
            <p class="mt-6 font-medium">{project.description}</p>
            <hr />

            <h2 class="font-bold text-2xl mt-5">Tasks</h2>
            <input type="text"  class="mt-4 p-2 border rounded-md w-96 bg-slate-300" ref={taskData}/>
            <button class="bg-white text-black p-2 rounded-md ml-10 font-semibold"  onClick={() => addTask(taskData.current.value)}>Add Task</button>
            <ul>
                {tasks.map((task,index) => <li key={index}> {task} </li>)}
            </ul>


        </div>
    )
}