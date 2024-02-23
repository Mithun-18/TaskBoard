import AddTask from "./component/addTask";
import NewTaskBoard from "./component/newTaskBoard";
import TaskCard from "./component/taskCard";

function App() {
  return (
    <div className="App">
      <div className="beforeTaskCard" title="Todo">
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
      </div>
      <AddTask />
      <div>
        <NewTaskBoard />
      </div>
    </div>
  );
}

export default App;
