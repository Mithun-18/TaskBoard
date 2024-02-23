import { useRef } from "react";
import Button from "./button";
import TextFeild from "./textFeild";

export default function NewTaskBoard() {
  const boardNameRef = useRef(0);
  const yourNameRef = useRef(0);
  return (
    <div className="newTaskBoard">
        <h1 style={{ fontSize: "40px", fontWeight: "400" }}>
          Create New Task Board
        </h1>
      <div className="textFieldcontainer">
        <TextFeild placeHolder={"Board Name"} inRef={boardNameRef} />
        <TextFeild placeHolder={"Your Name"} inRef={yourNameRef} />
      </div>
      <div>
        <Button bName={"Create"} />
      </div>
    </div>
  );
}
