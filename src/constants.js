import { DOING_TASK_ID, DONE_TASK_ID, TODO_TASK_ID } from "./config";

export const todoStates = [
  {
    id: TODO_TASK_ID,
    title: "Todo",
    color: "3px solid red",
  },
  {
    id: DOING_TASK_ID,
    title: "Doing",
    color: "3px solid cornflowerblue",
  },
  {
    id: DONE_TASK_ID,
    title: "Done",
    color: "3px solid limegreen",
  },
];

export const USER_ID_COOKIE_KEY = "user_id";
export const USER_NAME_COOKIE_KEY = "user_name";
