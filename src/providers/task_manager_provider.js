import { createContext, useContext, useEffect, useState } from "react";
import { DOING_TASK_ID, DONE_TASK_ID, TODO_TASK_ID } from "../config.js";
import {
  USER_ADDTASK_ENDPOINT,
  USER_BOARDS_ENDPOINT,
  USER_CREATEBOARD_ENDPOINT,
  USER_DELETETASK_ENDPOINT,
  USER_TASKS_ENDPOINT,
} from "../services/constants.js";
import http from "../services/http";

const TaskManagerContext = createContext();

export function TaskManagerProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [taskBoards, setTaskBoards] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState("");
  const [tasks, setTasks] = useState({});
  const [showAddTaskModal, setShowAddTaskModal] = useState(null);

  async function loadBoards() {
    try {
      setLoading(true);
      setTimeout(async () => {
        let res = await http.get(USER_BOARDS_ENDPOINT);
        setTaskBoards([...res.data.data]);
        if (!selectedBoardId) {
          setSelectedBoardId(res?.data?.data?.[0]?.table_id || "");
        }
        setLoading(false);
      }, 3000);
    } catch (error) {
      setLoading(false);
      setTaskBoards([]);
    }
  }

  async function createBoard(boardName, onSuccess) {
    try {
      setLoading(true);
      const res = await http.post(USER_CREATEBOARD_ENDPOINT, {
        boardName,
      });

      setSelectedBoardId(res?.data?.data?.boardId || "");
      setLoading(false);
      onSuccess?.();
    } catch (e) {
      setLoading(false);
    }
  }

  async function addTask(data, onSuccess) {
    data = { ...data, boardId: selectedBoardId };
    try {
      setLoading(true);
      const res = await http.post(USER_ADDTASK_ENDPOINT, data);
      if (res?.data?.data) {
        const taskStatus = res?.data?.data?.status;
        if (taskStatus === 1) {
          updateTasks(TODO_TASK_ID, res?.data?.data);
        } else if (taskStatus === 2) {
          updateTasks(DOING_TASK_ID, res?.data?.data);
        } else if (taskStatus === 3) {
          updateTasks(DONE_TASK_ID, res?.data?.data);
        }
      }
      setShowAddTaskModal(false);
      onSuccess?.();
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  function updateTasks(status, data) {
    tasks[status] = [data, ...tasks[status]];
    setTasks({ ...tasks });
  }

  useEffect(() => {
    if (selectedBoardId) {
      try {
        setLoading(true);
        setTimeout(async () => {
          let res = await http.post(USER_TASKS_ENDPOINT, {
            boardId: selectedBoardId,
          });

          const todo = res.data.data.filter((ele) => ele.status === 1);
          const doing = res.data.data.filter((ele) => ele.status === 2);
          const done = res.data.data.filter((ele) => ele.status === 3);

          setTasks({
            [TODO_TASK_ID]: todo,
            [DOING_TASK_ID]: doing,
            [DONE_TASK_ID]: done,
          });

          setLoading(false);
        }, 3000);
      } catch (error) {
        setLoading(false);
        setTasks({});
      }
    }
  }, [selectedBoardId]);

  async function deleteTask(taskId, taskStatus) {
    try {
      setLoading(true);
      await http.post(USER_DELETETASK_ENDPOINT, {
        taskId,
      });

      tasks[taskStatus] = tasks[taskStatus].filter(
        (ele) => ele.task_id != taskId
      );
      setTasks({ ...tasks });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <TaskManagerContext.Provider
      value={{
        taskManagerLoading: loading,
        taskBoards,
        loadBoards,
        selectedBoardId,
        setSelectedBoardId,
        tasks,
        createBoard,
        setShowAddTaskModal,
        showAddTaskModal,
        addTask,
        deleteTask,
      }}
    >
      {children}
    </TaskManagerContext.Provider>
  );
}

export default function useTaskManager() {
  return useContext(TaskManagerContext);
}
