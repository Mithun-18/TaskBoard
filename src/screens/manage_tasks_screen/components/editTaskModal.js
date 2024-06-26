import { useEffect, useRef, useState } from "react";
import { CustomModal } from "../../../component/core/custom_modal";
import TextFeild from "../../../component/core/textFeild";
import TaskStatusSelection from "./taskStatusSelection";
import Button from "../../../component/core/button";
import useTaskManager from "../../../providers/task_manager_provider";
import { DOING_TASK_ID, DONE_TASK_ID, TODO_TASK_ID } from "../../../config";

export default function EditTaskModal() {
  const { showEditTaskModal, setShowEditTaskModal, editTask } =
    useTaskManager();
  const [editTaskStatus, setEditTaskStatus] = useState(null);
  const taskNameRef = useRef(0);
  const descrptionRef = useRef(0);

  useEffect(() => {
    if (showEditTaskModal) {
      taskNameRef.current.value = showEditTaskModal?.title || "";
      descrptionRef.current.value = showEditTaskModal?.desc_task || "";
      setEditTaskStatus(showEditTaskModal?.taskStatus || TODO_TASK_ID);
    }
  }, [showEditTaskModal]);

  function onEditTask() {
    let taskName = taskNameRef.current.value;
    let decription = descrptionRef.current.value;
    let taskStatus;
    if (editTaskStatus === TODO_TASK_ID) {
      taskStatus = 1;
    } else if (editTaskStatus === DOING_TASK_ID) {
      taskStatus = 2;
    } else if (editTaskStatus === DONE_TASK_ID) {
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

    const taskId = showEditTaskModal.task_id;
    const data = {
      taskName,
      decription,
      taskStatus,
      taskId,
    };

    editTask(data);
  }

  return (
    <CustomModal
      title={"Edit Task"}
      isOpen={showEditTaskModal}
      onClose={() => {
        setShowEditTaskModal(null);
      }}
    >
      <div className="textFeildContainer">
        <TextFeild placeHolder={"Task Name"} inputRef={taskNameRef} />
        <TextFeild placeHolder={"Decription"} inputRef={descrptionRef} />
        <TaskStatusSelection
          seletedValue={editTaskStatus}
          onChange={(value) => {
            setEditTaskStatus(value);
          }}
        />
        <Button bName={"Edit"} onClick={onEditTask} />
      </div>
    </CustomModal>
  );
}
