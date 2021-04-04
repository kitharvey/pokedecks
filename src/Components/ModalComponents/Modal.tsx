import React from "react";
import ModalCardWrapper from "./ModalCardWrapper";

const Modal: React.FC = () => (
    <div className="w-full h-full fixed left-0 top-0 z-100 flex flex-col items-center justify-center bg-opacity-25 bg-black">
      <ModalCardWrapper />
    </div>
  );

export default Modal;
