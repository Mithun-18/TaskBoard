import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SelectBoard from "../../component/common/selectBoard";
import { todoStates } from "../../constants";
import useAuth from "../../providers/auth_provider";
import TaskCard from "./components/taskCard";
import TaskCardContainer from "./components/taskCardContainer";
import http from "../../services/http";
import useTaskManager from "../../providers/task_manager_provider";
import Loader from "../../component/core/loader";
import Select from "../../component/common/selectBoard";
import EmptyState from "../../component/common/emptyState";

export default function ManageTasksScreen() {
  const { isLoggedIn, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { loadBoards, taskManagerLoading, taskBoards } = useTaskManager();

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

  useEffect(() => {
    console.log(
      "taskboards ",
      taskManagerLoading,
      authLoading,
      taskBoards,
      taskBoards.length
    );
  }, [authLoading, taskManagerLoading]);

  function renderContent() {
    const boardOptions = taskBoards.map((ele) => {
      return { name: ele.name, value: ele.table_id };
    });
    return (
      <>
        <div className="task-board-header">
          <div className="task-board-button-left">
            <span>{taskBoards[0]?.name}</span>
          </div>
          <div className="task-board-button-right">
            <button className="task-board-button">NEW BOARD</button>
            <button className="task-board-button">ADD TASK</button>
            <Select className={"task-board-button "} options={boardOptions} />
          </div>
        </div>
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
      </>
    );
  }

  return (
    <div>
      {authLoading || taskManagerLoading ? (
        <Loader />
      ) : taskBoards.length ? (
        renderContent()
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
