import { createPortal } from "react-dom"
import { useImperativeHandle, useRef } from "react";

export default function Modal({ children, ref }) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
            close() {
                dialog.current.close();
            }
        }
    })

    return createPortal(
        <dialog 
            ref={dialog} 
            className="p-0 rounded-xl border-0 shadow-lg backdrop:bg-black/50"
        >
            <div className="p-6 bg-white rounded-xl w-[90vw] max-w-md">
                {children}
                <form method="dialog" className="mt-4 text-right">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        Close
                    </button>
                </form>
            </div>
        </dialog>,
        document.getElementById("modal-root")
    );
}
