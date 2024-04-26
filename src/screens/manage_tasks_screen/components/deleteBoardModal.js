import { CustomModal } from "../../../component/core/custom_modal";
import useTaskManager from "../../../providers/task_manager_provider";

export default function DeleteBoardModal() {
  const {
    showDeleteBoardModal,
    setShowDeleteBoardModal,
    deleteBoard,
    taskBoards,
    selectedBoardId,
  } = useTaskManager();

  const boardName = taskBoards.map((ele) => {
    if (ele.table_id == selectedBoardId) return ele.name;
  });

  return (
    <CustomModal
      isOpen={showDeleteBoardModal}
      onClose={() => {
        setShowDeleteBoardModal(false);
      }}
      width={"fit-content"}
    >
      <div className="deleteBoardModal">
        <p className="capitalize ">
          Are you sure you want to delete{" "}
          <span className="uppercase">`{boardName}`</span> board ?
        </p>
        <button
          onClick={() => {
            deleteBoard();
          }}
        >
          YES
        </button>
      </div>
    </CustomModal>
  );
}
