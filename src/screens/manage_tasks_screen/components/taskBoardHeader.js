import { useNavigate } from "react-router-dom";
import Select from "../../../component/common/selectBoard.js";
import useTaskManager from "../../../providers/task_manager_provider.js";
import { CREATE_BOARD_ROUTE } from "../../../constants.js";
import { TODO_TASK_ID } from "../../../config.js";
import useAuth from "../../../providers/auth_provider.js";

export default function TaskBoardHeader() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const {
    taskBoards,
    selectedBoardId,
    setSelectedBoardId,
    setShowAddTaskModal,
  } = useTaskManager();

  function onBoardChange(boardId) {
    setSelectedBoardId(boardId);
  }

  const boardOptions = taskBoards.map((ele) => {
    return { name: ele.name, value: ele.table_id };
  });

  const selectBoard = taskBoards.find((ele) => ele.table_id == selectedBoardId);

  return (
    <div className="task-board-header">
      <div className="task-board-button-left">
        <span>{selectBoard?.name || ""}</span>
      </div>
      <div className="task-board-button-right">
        <button
          className="task-board-button"
          onClick={() => navigate(CREATE_BOARD_ROUTE)}
        >
          NEW BOARD
        </button>
        <button
          className="task-board-button"
          onClick={() => setShowAddTaskModal(TODO_TASK_ID)}
        >
          ADD TASK
        </button>
        <Select
          className={"task-board-button "}
          options={boardOptions}
          onChange={onBoardChange}
          selectedValue={selectedBoardId}
        />
        <button
          className="task-board-button"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
}
