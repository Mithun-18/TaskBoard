import { DOING_TASK_ID, DONE_TASK_ID, TODO_TASK_ID } from "../../../config";

export default function TaskStatusSelection({ seletedValue = "", onChange }) {
  function handleChange({ target: { value } }) {
    onChange?.(value);
  }
  return (
    <div>
      <span>Task Status</span>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "16px",
        }}
      >
        <div>
          <input
            type="radio"
            name="AddTask"
            value={TODO_TASK_ID}
            checked={seletedValue == TODO_TASK_ID}
            onChange={handleChange}
          />
          <label>TODO</label>
        </div>
        <div>
          <input
            type="radio"
            name="AddTask"
            value={DOING_TASK_ID}
            checked={seletedValue == DOING_TASK_ID}
            onChange={handleChange}
          />
          <label>DOING</label>
        </div>
        <div>
          <input
            type="radio"
            name="AddTask"
            value={DONE_TASK_ID}
            checked={seletedValue == DONE_TASK_ID}
            onChange={handleChange}
          />
          <label>DONE</label>
        </div>
      </div>
    </div>
  );
}
