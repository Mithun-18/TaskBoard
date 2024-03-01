import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewTaskBoard from "./screens/create_board_screen/components/newTaskBoard";
import CreateBoardScreen from "./screens/create_board_screen";
import {CustomModal} from './component/core/custom_modal';
import AddTask from "./component/addTask";

export default () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<h1>hshh</h1>}/>
          <Route path="/create-board"  element={<CreateBoardScreen/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
