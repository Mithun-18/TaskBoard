import HandleClickNavigate from "../../component/core/HandleClickNavigate.js";
import { LOGIN_ROUTE } from "../../constants";
import useAuth from "../../providers/auth_provider.js";
import NewTaskBoard from "./components/newTaskBoard";

export default function CreateBoardScreen() {
  const { logout } = useAuth();
  return (
    <div>
      <div className="handleClickNavigateContainer ">
        <HandleClickNavigate
          onHandleClickNavigate={logout}
          path={LOGIN_ROUTE}
          bName={"LOGOUT"}
        />
      </div>
      <div className="screen-container">
        <div className="heading-main">
          <div style={{ marginBottom: 32 }}>
            <span>Task Board App</span>
          </div>
          <div className="createTaskBoard">
            <img
              src="taskBoard.jpg"
              alt="Task Board"
              height={"400px"}
              width={"500px"}
            />
            <NewTaskBoard />
          </div>
        </div>
      </div>
    </div>
  );
}
