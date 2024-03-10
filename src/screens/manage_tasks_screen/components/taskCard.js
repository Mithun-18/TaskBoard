import { MdOutlineDeleteForever } from "react-icons/md";
import useTaskManager from "../../../providers/task_manager_provider";

export default function TaskCard({
  heading,
  description,
  borderColor,
  taskId,
  taskStatus,
}) {
  const { deleteTask } = useTaskManager();
  return (
    <div className="taskCard" style={{ borderLeft: borderColor }}>
      <div className="taskCardHeader">
        <span>{heading}</span>
        <MdOutlineDeleteForever
          size={24}
          onClick={() => deleteTask?.(taskId, taskStatus)}
        />
      </div>
      <div className="horizontal-line"></div>
      <div className="taskCardContent">
        <span>{description}</span>
      </div>
    </div>
  );
}
