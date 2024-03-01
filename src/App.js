import AddTask from "./component/addTask";
import TaskCard from "./component/taskCard";
import { todoStates } from "./constants";
import TaskCardContainer from "./taskCardContainer";
import CreateBoardScreen from "./screens/create_board_screen";
import Router from './router';

function App() {
  return (
    <div className="App">
    <Router/>
    </div>
  );
}

export default App;
