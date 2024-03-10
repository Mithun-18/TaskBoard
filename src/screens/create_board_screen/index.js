import LogOut from "../../component/core/logout";
import NewTaskBoard from "./components/newTaskBoard";

export default function CreateBoardScreen() {
  return (
    <div>
      <div className="logOutContainer">
        <LogOut />
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
