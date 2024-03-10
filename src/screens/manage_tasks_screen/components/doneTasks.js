import { DONE_TASK_ID } from "../../../config";
import { todoStates } from "../../../constants";
import useTaskManager from "../../../providers/task_manager_provider";
import TaskCard from "./taskCard";
import TaskCardContainer from "./taskCardContainer";

export default function DoneTasks() {
  const { tasks } = useTaskManager();
  const doneConfig = todoStates.find((state) => state.id == DONE_TASK_ID);

  return (
    <TaskCardContainer config={doneConfig} taskStatus={DONE_TASK_ID}>
      {tasks[DONE_TASK_ID]?.map((ele, index) => (
        <TaskCard
          key={index}
          taskId={ele.task_id}
          heading={ele?.title}
          description={ele?.desc_task}
          borderColor={doneConfig?.color}
          taskStatus={DONE_TASK_ID}
        />
      ))}
    </TaskCardContainer>
  );
}
