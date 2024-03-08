import { createContext, useContext, useEffect, useState } from "react";
import http from "../services/http";
import {
  USER_BOARDS_ENDPOINT,
  USER_TASKS_ENDPOINT,
} from "../services/constants.js";

const TaskManagerContext = createContext();

export function TaskManagerProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [taskBoards, setTaskBoards] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState("");
  const [tasks, setTasks] = useState([]);

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
      console.log("here", selectedBoardId);
      try {
        setLoading(true);
        setTimeout(async () => {
          let res = await http.post(USER_TASKS_ENDPOINT, {
            boardId: selectedBoardId,
          });
          setTasks([...res.data.data]);
          setLoading(false);
        }, 3000);
      } catch (error) {
        setLoading(false);
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
      }}
    >
      {children}
    </TaskManagerContext.Provider>
  );
}

export default function useTaskManager() {
  return useContext(TaskManagerContext);
}
