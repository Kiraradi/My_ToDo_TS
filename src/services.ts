import { typeTask } from "./types";

export const getId = ():string => {
    return Math.random().toString(16).slice(2)
}

export const createNewTask = (text:string): typeTask => {
    const newTask = {
        id: getId(),
        text: text,
        creationTime: new Date().getTime(),
        status: false,
    }

    return newTask;
}