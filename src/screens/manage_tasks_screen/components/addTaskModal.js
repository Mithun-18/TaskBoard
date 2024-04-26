import { useRef } from "react";
import { CustomModal } from "../../../component/core/custom_modal";
import TextFeild from "../../../component/core/textFeild";
import useTaskManager from "../../../providers/task_manager_provider";
import Button from "../../../component/core/button";
import { DOING_TASK_ID, DONE_TASK_ID } from "../../../config";
import TaskStatusSelection from "./taskStatusSelection";

export default function AddTaskModal() {
  const { showAddTaskModal, setShowAddTaskModal, addTask } = useTaskManager();
  const taskNameRef = useRef(0);
  const descrptionRef = useRef(0);

  function onAddTask() {
    const taskName = taskNameRef.current.value;
    const decription = descrptionRef.current.value;
    let taskStatus = 1;
    if (showAddTaskModal === DOING_TASK_ID) {
      taskStatus = 2;
    } else if (showAddTaskModal === DONE_TASK_ID) {
      taskStatus = 3;
    }
    if (!taskName) {
      taskNameRef.current.focus();
      return;
    }
    if (!decription) {
      descrptionRef.current.focus();
      return;
    }
    const data = {
      taskName,
      decription,
      taskStatus,
    };

    addTask(data);
    taskNameRef.current.value = "";
    descrptionRef.current.value = "";
  }

  return (
    <CustomModal
      title={"Add Task"}
      isOpen={showAddTaskModal}
      onClose={() => {
        taskNameRef.current.value = "";
        descrptionRef.current.value = "";
        setShowAddTaskModal(null);
      }}
    >
      <div className="textFeildContainer">
        <TextFeild
          placeHolder={"Task Name"}
          inputRef={taskNameRef}
          focus={true}
        />
        <TextFeild placeHolder={"Decription"} inputRef={descrptionRef} />
        <TaskStatusSelection
          seletedValue={showAddTaskModal}
          onChange={(value) => {
            setShowAddTaskModal(value);
          }}
        />
        <Button bName={"ADD"} onClick={onAddTask} />
      </div>
    </CustomModal>
  );
}
