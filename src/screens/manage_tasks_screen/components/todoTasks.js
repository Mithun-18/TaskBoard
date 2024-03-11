import { TODO_TASK_ID } from "../../../config";
import { todoStates } from "../../../constants";
import useTaskManager from "../../../providers/task_manager_provider";
import TaskCard from "./taskCard";
import TaskCardContainer from "./taskCardContainer";

export default function TodoTasks() {
  const { tasks, setShowEditTaskModal, showEditTaskModal } = useTaskManager();
  const todoConfig = todoStates.find((state) => state.id === TODO_TASK_ID);

  return (
    <TaskCardContainer config={todoConfig} taskStatus={TODO_TASK_ID}>
      {tasks[TODO_TASK_ID]?.map((ele, index) => (
        <TaskCard
          key={index}
          taskId={ele.task_id}
          heading={ele?.title}
          description={ele?.desc_task}
          borderColor={todoConfig?.color}
          taskStatus={TODO_TASK_ID}
          onEdit={() => {
            setShowEditTaskModal({ ...ele, taskStatus: TODO_TASK_ID });
          }}
        />
      ))}
    </TaskCardContainer>
  );
}
