import { useState } from "react";
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
        <p>Are you sure you want to delete `{boardName}` board ?</p>
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
