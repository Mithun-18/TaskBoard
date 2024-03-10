import { MdAddCircleOutline } from "react-icons/md";
import useTaskManager from "../../../providers/task_manager_provider";

export default function TaskCardContainer({ children, config, taskStatus }) {
  const { setShowAddTaskModal } = useTaskManager();
  return (
    <div className="taskCardRootContainer">
      <div className="displayFlexing">
        <div style={{ fontWeight: "700" }}>{config?.title}</div>
        <MdAddCircleOutline
          size={20}
          onClick={() => setShowAddTaskModal(taskStatus)}
        />
      </div>
      <div className={"taskCardContainer"}>{children}</div>
    </div>
  );
}
