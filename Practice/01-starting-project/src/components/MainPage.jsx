export default function MainPage({handleAddStartProject}) {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h2 className="text-black font-bold">No Project Selected</h2>
            <h4 className="mt-3 text-gray-500">Select a project or get started with a new one</h4>
            <button className="mt-3 bg-black text-gray-500 rounded-lg p-2 hover:bg-gray-700" onClick={handleAddStartProject}>Create new project</button>
        </div>
    )
}