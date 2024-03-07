import { createContext, useContext, useState } from "react";
import http from "../services/http";
import { USER_BOARD_ENDPOINT } from "../services/constants";

const TaskManagerContext = createContext();

export function TaskManagerProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [taskBoards, setTaskBoards] = useState([]);
  async function loadBoards() {
    try {
      setLoading(true);
      setTimeout(async () => {
        let res = await http.get(USER_BOARD_ENDPOINT);
        setTaskBoards([...res.data.data]);
        setLoading(false);
      }, 3000);
    } catch (error) {
      setLoading(false);
      setTaskBoards([]);
    }
  }
  return (
    <TaskManagerContext.Provider
      value={{ taskManagerLoading: loading, taskBoards, loadBoards }}
    >
      {children}
    </TaskManagerContext.Provider>
  );
}

export default function useTaskManager() {
  return useContext(TaskManagerContext);
}
