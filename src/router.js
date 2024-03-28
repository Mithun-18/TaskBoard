import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBoardScreen from "./screens/create_board_screen";
import LoginScreen from "./screens/login_screen";
import ManageTasksScreen from "./screens/manage_tasks_screen";
import {
  CREATE_BOARD_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
} from "./constants";
import SignUp from "./screens/sign_up_screen";

export default () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<ManageTasksScreen />} />
          <Route path={CREATE_BOARD_ROUTE} element={<CreateBoardScreen />} />
          <Route path={LOGIN_ROUTE} element={<LoginScreen />} />
          <Route path={SIGNUP_ROUTE} element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
