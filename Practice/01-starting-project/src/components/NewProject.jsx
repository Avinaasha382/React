import Input from "./Input"
import { useRef } from "react"
import Modal from "./Modal";

export default function NewProject({handleAddProject,handleCancelAddProject}) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const project_title = title.current.value;
        const project_description = description.current.value;
        const project_due_date = dueDate.current.value;

        if(!project_title || !project_description || ! project_due_date)
        {
            modal.current.open();
            return;
        }
        handleAddProject(project_title,project_description,project_due_date);

    }
    return (
        <>
            <Modal ref={modal} >
                <h2>Invalid Input...Please fill out all the details</h2> 
            </Modal>
            <div className="flex flex-col justify-center items-center min-h-screen">
                <div className="w-full flex justify-end pr-5 mb-4">
                    <button className="mr-2 bg-gray-300 px-4 py-2 rounded" onClick={handleCancelAddProject} >Cancel</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSave}>Save</button>
                </div>  

                <div className="w-full max-w-md flex flex-col">
                    <Input ref = {title} label="Title"  />
                    <Input ref = {description} label="Description" isTextArea />
                    <Input ref = {dueDate} label="Due Date" />
                </div>
            </div>
        </>
    )
}
