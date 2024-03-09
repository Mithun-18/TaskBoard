import { DOING_TASK_ID } from "../../../config";
import { todoStates } from "../../../constants";
import useTaskManager from "../../../providers/task_manager_provider";
import TaskCard from "./taskCard";
import TaskCardContainer from "./taskCardContainer";

export default function DoingTasks() {
  const { tasks } = useTaskManager();
  const doingConfig = todoStates.find((state) => state.id == DOING_TASK_ID);

  return (
    <TaskCardContainer config={doingConfig}>
      {tasks[DOING_TASK_ID]?.map((ele, index) => (
        <TaskCard
          key={index}
          taskId={ele.task_id}
          heading={ele?.title}
          description={ele?.desc_task}
          borderColor={doingConfig?.color}
          taskStatus={DOING_TASK_ID}
        />
      ))}
    </TaskCardContainer>
  );
}
