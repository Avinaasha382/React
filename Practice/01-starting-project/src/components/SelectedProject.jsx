export default function SelectedProject({ projectDetails,handleDeleteProject}) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">{projectDetails.title}</h2>
                    <button onClick={handleDeleteProject}
                        className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm transition"
                    >
                        Delete
                    </button>
                </div>

                <p className="text-sm text-gray-500 mb-2">
                    <span className="font-medium">Due Date:</span> {projectDetails.dueDate}
                </p>
                <p className="text-gray-700">{projectDetails.description}</p>
            </div>
        </div>
    );
}
