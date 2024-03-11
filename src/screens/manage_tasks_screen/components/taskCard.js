import { BiSolidEdit } from "react-icons/bi";
import { MdOutlineDeleteForever } from "react-icons/md";
import useTaskManager from "../../../providers/task_manager_provider";

export default function TaskCard({
  heading,
  description,
  borderColor,
  taskId,
  taskStatus,
  onEdit,
}) {
  const { deleteTask } = useTaskManager();
  return (
    <div className="taskCard" style={{ borderLeft: borderColor }}>
      <div className="taskCardHeader">
        <span>{heading}</span>
        <div className="iconContainerForTaskcard">
          <MdOutlineDeleteForever
            size={24}
            onClick={() => deleteTask?.(taskId, taskStatus)}
          />
          <BiSolidEdit
            size={24}
            onClick={() => {
              onEdit?.();
            }}
          />
        </div>
      </div>
      <div className="horizontal-line"></div>
      <div className="taskCardContent">
        <span>{description}</span>
      </div>
    </div>
  );
}
