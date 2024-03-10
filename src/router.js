import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBoardScreen from "./screens/create_board_screen";
import LoginScreen from "./screens/login_screen";
import ManageTasksScreen from "./screens/manage_tasks_screen";
import { CREATE_BOARD_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from "./constants";

export default () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<ManageTasksScreen />} />
          <Route path={CREATE_BOARD_ROUTE} element={<CreateBoardScreen />} />
          <Route path={LOGIN_ROUTE} element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
