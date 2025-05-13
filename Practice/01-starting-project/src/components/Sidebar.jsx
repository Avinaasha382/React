export default function Sidebar({ sidebar_title, button_title, projects, handleSelectProject, handleAddStartProject }) {
    console.log("projects", projects);
    return (
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="bg-black h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                            <span className="text-white ms-3">{sidebar_title}</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                            <button onClick={handleAddStartProject}
                                className="text-white hover:bg-gray-700 px-2 py-1 rounded"
                            >
                                {button_title}
                            </button>
                        </div>
                    </li>
                    {projects.map((project) => {
                        return (
                            <li key={project.id}>
                                <button
                                    onClick={() => handleSelectProject(project.id)}
                                    className="flex items-center w-full text-left p-2 text-gray-300 hover:bg-gray-700 rounded-lg group"
                                >
                                    {project.title}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
}
