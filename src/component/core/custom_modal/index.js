import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export function CustomModal({ isOpen = false, onClose, children, title = "" }) {
  return isOpen ? (
    <div className={"custom-modal is-open"}>
      <div className="custom-modal-container">
        <div className="customModalHeader">
          <div className="heading">{title}</div>
          <div
            onClick={() => {
              onClose?.();
            }}
            className="custom-modal-close"
          >
            <AiOutlineClose size={24} />
          </div>
        </div>

        <div className="custom-modal-content">{children}</div>
      </div>
    </div>
  ) : (
    <></>
  );
}
