import { createContext, useContext, useEffect, useState } from "react";
import { DOING_TASK_ID, DONE_TASK_ID, TODO_TASK_ID } from "../config.js";
import {
  USER_BOARDS_ENDPOINT,
  USER_TASKS_ENDPOINT,
} from "../services/constants.js";
import http from "../services/http";

const TaskManagerContext = createContext();

export function TaskManagerProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [taskBoards, setTaskBoards] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState("");
  const [tasks, setTasks] = useState({});

  async function loadBoards() {
    try {
      setLoading(true);
      setTimeout(async () => {
        let res = await http.get(USER_BOARDS_ENDPOINT);
        setTaskBoards([...res.data.data]);
        setSelectedBoardId(res?.data?.data?.[0]?.table_id || "");
        setLoading(false);
      }, 3000);
    } catch (error) {
      setLoading(false);
      setTaskBoards([]);
    }
  }

  useEffect(() => {
    if (selectedBoardId) {
      try {
        setLoading(true);
        setTimeout(async () => {
          let res = await http.post(USER_TASKS_ENDPOINT, {
            boardId: selectedBoardId,
          });

          const todo = res.data.data.filter((ele) => ele.status == 1);
          const doing = res.data.data.filter((ele) => ele.status == 2);
          const done = res.data.data.filter((ele) => ele.status == 3);

          setTasks({
            [TODO_TASK_ID]: todo,
            [DOING_TASK_ID]:doing,
            [DONE_TASK_ID]:done,
          });

          setLoading(false);
        }, 3000);
      } catch (error) {
        setLoading(false);
        setTasks({});
      }
    }
  }, [selectedBoardId]);



  return (
    <TaskManagerContext.Provider
      value={{
        taskManagerLoading: loading,
        taskBoards,
        loadBoards,
        selectedBoardId,
        setSelectedBoardId,
        tasks,
      }}
    >
      {children}
    </TaskManagerContext.Provider>
  );
}

export default function useTaskManager() {
  return useContext(TaskManagerContext);
}
