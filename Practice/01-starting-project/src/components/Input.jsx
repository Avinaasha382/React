export default function Input({ isTextArea, label, ...props }) {
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-2 font-medium text-gray-700">{label}</label>
            {isTextArea ? (
                <textarea 
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...props} 
                />
            ) : (
                <input 
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...props} 
                />
            )}
        </div>
    )
}
