import { useRef } from "react"

export default function Project({addProject,setAddProject}) {
    const projectTitle = useRef();
    const projectDescription = useRef();
    const projectDate = useRef();

    function handleSave()
    {
        const title = projectTitle.current.value;
        const description = projectDescription.current.value;
        const date = projectDate.current.value;

        projectTitle.current.value = "";
        projectDescription.current.value = "";
        projectDate.current.value = "";

        addProject(title,description,date);
    }

    return (
        <div class="sm:ml-96 mt-40  h-screen flex flex-col">
            <div class="flex justify-end">
                <button class="bg-slate-950 text-white rounded-md  p-2 mr-14 " onClick={handleSave}>Save</button>
                <button class="bg-white text-black p-2 rounded-md hover:bg-slate-500 transition-all mr-10" onClick={() => setAddProject(0)}>Cancel</button>
            </div>
            
            <h4 class="font-medium">TITLE</h4>
            <input type="text"  class="mt-4 p-2 border rounded-md w-96 bg-slate-300" 
              placeholder="Enter text" ref={projectTitle} />

            <h4 class="font-medium mt-3">DESCRIPTION</h4>
            <textarea name="" id="" cols="50" rows="4" class="mt-4 p-2 border rounded-md w-96 bg-slate-300" ref={projectDescription}></textarea>

            <h4 class="font-medium mt-3">DUE DATE</h4>
            <input type="date" class="mt-4 p-2 bg-slate-300" ref={projectDate} />
        </div>
    )
}

