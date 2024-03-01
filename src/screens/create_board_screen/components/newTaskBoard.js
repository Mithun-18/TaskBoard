import { useRef } from "react";
import Button from "../../../component/core/button";
import TextFeild from "../../../component/core/textFeild";

export default function NewTaskBoard() {
  const boardNameRef = useRef(0);
  const yourNameRef = useRef(0);
  return (
    <div className="newTaskBoard">
      <span style={{ fontSize: "32px", fontWeight: "400"}}>
        Create New Task Board
      </span>
        <TextFeild placeHolder={"Board Name"} inRef={boardNameRef} />
        <TextFeild placeHolder={"Your Name"} inRef={yourNameRef} />
        <Button bName={"Create"} />

    </div>
  );
}
