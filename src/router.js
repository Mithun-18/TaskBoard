import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBoardScreen from "./screens/create_board_screen";
import LoginScreen from "./screens/login_screen";
import ManageTasksScreen from "./screens/manage_tasks_screen";
import EmptyState from "./component/common/emptyState";
import SelectBoard from "./component/common/selectBoard";
import { CustomModal } from "./component/core/custom_modal";
import AddTask from "./component/core/custom_modal/components/addTask";
import NewTaskBoard from "./screens/create_board_screen/components/newTaskBoard";
import TaskCard from "./screens/manage_tasks_screen/components/taskCard";

export default () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/temp-modal"
            element={
              <CustomModal>
                <AddTask />
              </CustomModal>
            }
          />
          <Route path="/" element={<TaskCard heading={'heading'} description={'des'}/>} />
          <Route path="/create-board" element={<CreateBoardScreen />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
