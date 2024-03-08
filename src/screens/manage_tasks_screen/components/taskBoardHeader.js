import Select from "../../../component/common/selectBoard.js";
import useTaskManager from "../../../providers/task_manager_provider.js";

export default function TaskBoardHeader() {
  const { taskBoards, selectedBoardId, setSelectedBoardId } = useTaskManager();

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
        <button className="task-board-button">NEW BOARD</button>
        <button className="task-board-button">ADD TASK</button>
        <Select
          className={"task-board-button "}
          options={boardOptions}
          onChange={onBoardChange}
          selectedValue={selectedBoardId}
        />
      </div>
    </div>
  );
}
