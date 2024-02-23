import { useRef } from "react";
import TextFeild from "./textFeild";
import Button from "./button";

export default function AddTask() {
  const taskNameRef = useRef(0);
  const descriptionNameRef = useRef(0);
  const yourNameRef2 = useRef(0);
    
  return (
    <div style={{width:400}}>
      <div>
        <h3>Add Task</h3>
      </div>
      <div className="textFieldcontainer">
        <TextFeild placeHolder={"Task Name"} inRef={taskNameRef} />
        <TextFeild placeHolder={"Description"} inRef={descriptionNameRef} />
        <TextFeild placeHolder={"Your Name"} inRef={yourNameRef2} />
      </div>
      <div>
        <Button bName={"Add"} />
      </div>
    </div>
  );
}
