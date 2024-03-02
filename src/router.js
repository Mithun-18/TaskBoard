import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewTaskBoard from "./screens/create_board_screen/components/newTaskBoard";
import CreateBoardScreen from "./screens/create_board_screen";
import { CustomModal } from "./component/core/custom_modal";
import AddTask from "./component/common/addTask";
import LoginScreen from "./screens/login_screen";
import EmptyState from "./component/common/emptyState";
import Loader from "./component/core/loader";
import SelectBoard from "./component/common/selectBoard";
import TaskCard from "./component/common/taskCard";
import TaskCardContainer from "./taskCardContainer";
import TaskBoard from "./screens/task_board_screen";

export default () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskBoard/>} />
          <Route path="/create-board" element={<CreateBoardScreen />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
