import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { todoStates } from "../../constants";
import useAuth from "../../providers/auth_provider";
import TaskCard from "./components/taskCard";
import TaskCardContainer from "./components/taskCardContainer";
import useTaskManager from "../../providers/task_manager_provider";
import Loader from "../../component/core/loader";
import EmptyState from "../../component/common/emptyState";
import TaskBoardHeader from "./components/taskBoardHeader";

export default function ManageTasksScreen() {
  const { isLoggedIn, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { loadBoards, taskManagerLoading, taskBoards, selectedBoardId } =
    useTaskManager();

  useEffect(() => {
    if (!authLoading) {
      if (!isLoggedIn()) {
        navigate("login");
      } else {
        // TODO:  fetch tasks api
      }
    }
  }, [authLoading]);

  useEffect(() => {
    if (!authLoading) {
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
            <TaskCardContainer todoState={todoStates[0]}>
              <TaskCard
                heading={"heading"}
                description={"description"}
                borderColor={todoStates[0].color}
              />
              <TaskCard
                heading={"heading"}
                description={"description"}
                borderColor={todoStates[0].color}
              />
            </TaskCardContainer>
            <TaskCardContainer todoState={todoStates[1]}>
              <TaskCard
                heading={"heading"}
                description={"description"}
                borderColor={todoStates[1].color}
              />
              <TaskCard
                heading={"heading"}
                description={"description"}
                borderColor={todoStates[1].color}
              />
              <TaskCard
                heading={"heading"}
                description={"description"}
                borderColor={todoStates[1].color}
              />
            </TaskCardContainer>
            <TaskCardContainer todoState={todoStates[2]}>
              <TaskCard
                heading={"heading"}
                description={"description"}
                borderColor={todoStates[2].color}
              />
            </TaskCardContainer>
          </div>
        )}
      </>
    );
  }

  return (
    <div>
      {(authLoading || taskManagerLoading) && taskBoards.length == 0 ? (
        <Loader />
      ) : (
        <>{taskBoards.length ? renderContent() : <EmptyState />}</>
      )}
    </div>
  );
}
