import AddTask from "./component/addTask";
import TaskCard from "./component/taskCard";
import { todoStates } from "./constants";
import TaskCardContainer from "./taskCardContainer";
import CreateBoardScreen from "./screens/create_board_screen";

function App() {
  return (
    <div className="App">
      {/* <div className="beforeTaskCard" title="Todo">
        <TaskCard
          heading={"Heading"}
          description={"description"}
          borderColor={"3px solid cornflowerblue"}
        />
        <TaskCard
          heading={"Heading"}
          description={"description"}
          borderColor={"3px solid cornflowerblue"}
        />
        <TaskCard
          heading={"Heading"}
          description={"description"}
          borderColor={"3px solid cornflowerblue"}
        />
      </div>
      <div className="beforeTaskCard" title="Doing">
        <TaskCard
          heading={"Heading"}
          description={"description"}
          borderColor={"3px solid cornflowerblue"}
        />
        <TaskCard
          heading={"Heading"}
          description={"description"}
          borderColor={"3px solid cornflowerblue"}
        />
        <TaskCard
          heading={"Heading"}
          description={"description"}
          borderColor={"3px solid cornflowerblue"}
        />
      </div> */}
      {/* <AddTask /> */}
      {/* <NewTaskBoard /> */}

      <div
        style={{
          padding: "24px",
          display: "flex",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        <TaskCardContainer todoState={todoStates[0]}>
          <TaskCard
            heading={"Heading"}
            description={"description"}
            borderColor={"3px solid cornflowerblue"}
          />
          <TaskCard
            heading={"Heading"}
            description={"description"}
            borderColor={"3px solid cornflowerblue"}
          />
          <TaskCard
            heading={"Heading"}
            description={"description"}
            borderColor={"3px solid cornflowerblue"}
          />
        </TaskCardContainer>
        <TaskCardContainer todoState={todoStates[2]}>
          <TaskCard
            heading={"Heading"}
            description={"description"}
            borderColor={"3px solid cornflowerblue"}
          />
          <TaskCard
            heading={"Heading"}
            description={"description"}
            borderColor={"3px solid cornflowerblue"}
          />
          <TaskCard
            heading={"Heading"}
            description={"description"}
            borderColor={"3px solid cornflowerblue"}
          />
        </TaskCardContainer>
        <TaskCardContainer todoState={todoStates[1]}>
          <TaskCard
            heading={"Heading"}
            description={"description"}
            borderColor={"3px solid cornflowerblue"}
          />
          <TaskCard
            heading={"Heading"}
            description={"description"}
            borderColor={"3px solid cornflowerblue"}
          />
          <TaskCard
            heading={"Heading"}
            description={"description"}
            borderColor={"3px solid cornflowerblue"}
          />
        </TaskCardContainer>
      </div>
      <CreateBoardScreen />
    </div>
  );
}

export default App;
