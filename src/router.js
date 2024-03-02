import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewTaskBoard from "./screens/create_board_screen/components/newTaskBoard";
import CreateBoardScreen from "./screens/create_board_screen";
import {CustomModal} from './component/core/custom_modal';
import AddTask from "./component/common/addTask";
import LoginScreen from "./screens/login_screen";
import EmptyState from "./component/common/emptyState";

export default () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<EmptyState/>}/>
          <Route path="/create-board"  element={<CreateBoardScreen/>}/>
          <Route path="/login" element={<LoginScreen/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
