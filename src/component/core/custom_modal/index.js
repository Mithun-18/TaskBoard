import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export function CustomModal({ isOpen = true, children }) {
  let [classNames, setClassNames] = useState(["custom-modal"]);

  useEffect(() => {
    if (isOpen) {
      setClassNames(["custom-modal", "is-open"]);
    } else {
      setClassNames(["custom-modal", "is-closed"]);
    }
  }, [isOpen]);

  return (
    <div className={classNames.join(" ")}>
      <div className="custom-modal-container">
        <div
          onClick={() => {
            setClassNames(["custom-modal", "is-closed"]);
          }}
          className="custom-modal-close"
        >
          <AiOutlineClose size={24} />
        </div>

        <div className="custom-modal-content">{children}</div>
      </div>
    </div>
  );
}
