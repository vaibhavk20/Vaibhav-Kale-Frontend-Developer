import React, { useState } from "react";
import Modal from "./Modal";

const Capsule = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div onClick={openModal}>
        <div className="border p-4 rounded-md ">
          <p>
            <span className="font-bold">Type: </span>
            {item.type}
          </p>
          <p>
            <span className="font-bold">Status: </span>
            {item.status}
          </p>
          <p>
            <span className="font-bold">Original Launch: </span>
            {item.original_launch}
          </p>
        </div>
      </div>
      <Modal item={item} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Capsule;
