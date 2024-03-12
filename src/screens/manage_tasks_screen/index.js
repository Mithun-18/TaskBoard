import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmptyState from "../../component/common/emptyState";
import Loader from "../../component/core/loader";
import { LOGIN_ROUTE } from "../../constants";
import useAuth from "../../providers/auth_provider";
import useTaskManager from "../../providers/task_manager_provider";
import TaskBoardHeader from "./components/taskBoardHeader";
import TodoTasks from "./components/todoTasks";
import DoingTasks from "./components/doingTasks";
import DoneTasks from "./components/doneTasks";
import AddTaskModal from "./components/addTaskModal";
import EditTaskModal from "./components/editTaskModal";

export default function ManageTasksScreen() {
  const { isLoggedIn, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { loadBoards, taskManagerLoading, taskBoards } = useTaskManager();

  useEffect(() => {
    if (!authLoading) {
      if (!isLoggedIn()) {
        navigate(LOGIN_ROUTE);
      }
    }
  }, [authLoading]);

  useEffect(() => {
    if (!authLoading &&  isLoggedIn()) {
      loadBoards();
    }
  }, [authLoading]);

  function renderContent() {
    return (
      <>
        <TaskBoardHeader />
        {taskManagerLoading ? (
          <Loader />
        ) : (
          <div className="board-container">
            <TodoTasks />
            <DoingTasks />
            <DoneTasks />
          </div>
        )}
      </>
    );
  }


  return (
    <div>
      {(authLoading || taskManagerLoading) ? (
        <Loader />
      ) : (
        <>{taskBoards.length ? renderContent() : <EmptyState />}</>
      )}
      {/* Add Modal Component */}
      <AddTaskModal />
      {/* Edit Modal Component */}
      <EditTaskModal />
    </div>
  );
}
