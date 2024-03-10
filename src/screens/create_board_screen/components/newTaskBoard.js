import { useRef } from "react";
import Button from "../../../component/core/button";
import TextFeild from "../../../component/core/textFeild";
import { useNavigate } from "react-router-dom";
import useTaskManager from "../../../providers/task_manager_provider";
import { HOME_ROUTE } from "../../../constants";

export default function NewTaskBoard() {
  const boardNameRef = useRef(0);
  const navigate = useNavigate();
  const { createBoard } = useTaskManager();

  function onCreate() {
    let boardName = boardNameRef.current.value;

    if (!boardName) {
      boardNameRef.current.focus();
      return;
    }

    createBoard(boardName, () => {
      navigate(HOME_ROUTE);
    });
  }

  return (
    <div className="newTaskBoard">
      <span className="heading">Create New Task Board</span>
      <TextFeild placeHolder={"Board Name"} inputRef={boardNameRef} />
      <Button bName={"Create"} onClick={onCreate} />
    </div>
  );
}
