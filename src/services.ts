import { TaskType } from "./types";

export const getId = ():string => {
    return Math.random().toString(16).slice(2)
}

export const createNewTask = (text:string): TaskType => {
    const newTask = {
        id: getId(),
        text: text,
        isCompleted : false,
    }

    return newTask;
}