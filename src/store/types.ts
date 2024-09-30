import { TaskType } from "../types";

export interface IStore {
  currentFilter: string,
  tasksList: TaskType[]
}