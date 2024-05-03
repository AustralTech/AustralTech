import { useState } from 'react';

const Modal = ({ isVisible, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (value) => {
    const modalCl = document.getElementById('modal').classList;
    const overlayCl = document.getElementById('modal_overlay');

    if (value) {
      overlayCl.classList.remove('hidden');
      setTimeout(() => {
        modalCl.remove('opacity-0');
        modalCl.remove('-translate-y-full');
        modalCl.remove('scale-150');
      }, 100);
    } else {
      modalCl.add('-translate-y-full');
      setTimeout(() => {
        modalCl.add('opacity-0');
        modalCl.add('scale-150');
      }, 100);
      setTimeout(() => overlayCl.classList.add('hidden'), 300);
    }
  };

  return (
    <>
      <div className="p-3">
        <button
          onClick={() => openModal(true)}
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white focus:outline-none"
        >
          Open Modal
        </button>
      </div>

      <div id="modal_overlay" className="hidden absolute inset-0 bg-black bg-opacity-30 h-screen w-full flex justify-center items-start md:items-center pt-10 md:pt-0" >
        <div
          id="modal"
          className="opacity-0 transform -translate-y-full scale-150 relative w-10/12 md:w-1/2 h-1/2 md:h-3/4 bg-white rounded shadow-lg transition-opacity transition-transform duration-300"
        >
          <button
            onClick={() => openModal(false)}
            className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-2xl w-10 h-10 rounded-full focus:outline-none text-white"
          >
            &times;
          </button>
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-600">Title</h2>
          </div>
          <div className="w-full p-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, quis tempora! Similique, explicabo
            quaerat maxime corrupti tenetur blanditiis voluptas molestias totam? Quaerat laboriosam suscipit repellat
            aliquam blanditiis eum quos nihil.
          </div>
          <div className="absolute bottom-0 left-0 px-4 py-3 border-t border-gray-200 w-full flex justify-end items-center gap-3">
            <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white focus:outline-none">
              Save
            </button>
            <button
              onClick={() => openModal(false)}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
