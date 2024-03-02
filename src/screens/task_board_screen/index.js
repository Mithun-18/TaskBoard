import React from "react";
import TaskCardContainer from "../../taskCardContainer";
import TaskCard from "../../component/common/taskCard";
import { todoStates } from "../../constants";
import SelectBoard from "../../component/common/selectBoard";

export default function TaskBoardScreen() {
  return (
    <div>
      <div className="task-board-header">
        <button className="task-board-button">NEW BOARD</button>
        <button className="task-board-button">ADD TASK</button>
        <SelectBoard className={'task-board-button'} boardNames={['abc','xyz','lmn','pqrs']}/>
      </div>
      <div className="board-container">
        <TaskCardContainer todoState={todoStates[0]}>
          <TaskCard
            heading={"heading"}
            description={"description"}
            borderColor={"3px solid red"}
          />
          <TaskCard
            heading={"heading"}
            description={"description"}
            borderColor={"3px solid red"}
          />
        </TaskCardContainer>
        <TaskCardContainer todoState={todoStates[1]}>
        <TaskCard
            heading={"heading"}
            description={"description"}
            borderColor={"3px solid blue"}
          />
          <TaskCard
            heading={"heading"}
            description={"description"}
            borderColor={"3px solid blue"}
          />
          <TaskCard
            heading={"heading"}
            description={"description"}
            borderColor={"3px solid blue"}
          />
        </TaskCardContainer>
        <TaskCardContainer todoState={todoStates[2]}>
        <TaskCard
            heading={"heading"}
            description={"description"}
            borderColor={"3px solid green"}
          />
        </TaskCardContainer>
      </div>
    </div>
  );
}
