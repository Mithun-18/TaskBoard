import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBoardScreen from "./screens/create_board_screen";
import LoginScreen from "./screens/login_screen";
import ManageTasksScreen from "./screens/manage_tasks_screen";

export default () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/manage-task"
            element={<ManageTasksScreen></ManageTasksScreen>}
          />
          <Route path="/create-board" element={<CreateBoardScreen />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
