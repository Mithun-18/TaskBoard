import { useEffect, useState } from "react";

export default function CustomModal({ isOpen = false, children }) {
  let [classNames, setClassNames] = useState(["custom-modal"]);

  useEffect(() => {
    if (isOpen) {
        setClassNames(["custom-modal", "is-open"]);
      } else {
        setClassNames(["custom-modal", "is-closed"]);
      }
    
  }, [isOpen]);

  
  return <div className={classNames.join(' ')}>
    
  </div>;
}
