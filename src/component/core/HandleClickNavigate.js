import { useNavigate } from "react-router-dom";
import useTaskManager from "../../providers/task_manager_provider";

export default function HandleClickNavigate({
  onHandleClickNavigate,
  path,
  bName,
}) {
  const navigate = useNavigate();
  const { clearTaskManagerStates } = useTaskManager();

  function onSuccess() {
    clearTaskManagerStates?.();
    if (path) {
      navigate(path);
    }
  }
  return (
    <button
      className="task-board-button"
      onClick={() => {
        onHandleClickNavigate?.(onSuccess);
      }}
    >
      {bName}
    </button>
  );
}
