import { MdDelete } from "react-icons/md";

const DeleteModal = ({ setIsOpen, handleDelete }) => {
    return (
        <div className="p-6">
            <div className="fixed inset-0 bg-black/40 bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white w-[350px] rounded-lg shadow-lg p-6 text-center">
                    <div className="flex justify-center mb-4">
                        <MdDelete size={50} className="text-blue-500" />
                    </div>
                    <h2 className="text-lg font-medium mb-6">
                        Are you sure you want to <span className="font-bold">Delete</span>?
                    </h2>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="flex-1 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleDelete}
                            className="flex-1 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600"
                        >
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
