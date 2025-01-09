export default function SideBar({projects,handleClick,setAddProject}) {


    return <>
        <aside id="default-sidebar" class="bg-slate-800 fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto">
        <ul class="space-y-2 font-medium">
            <li>
                <span class="ms-3 mt-4 text-white">YOUR PROJECTS</span>
            </li>
            <li>
                <a href="/" class="flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group" onClick={(event) => {
                    event.preventDefault();
                    setAddProject(1);
                }} >
                    <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="bg-slate-400">
                        <rect x="45" y="10" width="10" height="80" fill="black" />
                        <rect x="10" y="45" width="80" height="10" fill="black" />
                    </svg>
                    <span class="flex-1 ms-3 whitespace-nowrap" >Add Project</span>
                </a>
            </li>

            {projects.map((project,index) => <li key={index} class="ms-3 mt-4 text-white" onClick={() => handleClick(index)}>
                {project.title}</li>)}

        </ul>
    </div>
</aside>


</>

}