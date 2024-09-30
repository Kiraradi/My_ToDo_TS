import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStore } from './types';
import { TaskType } from "../types";

const initialState: IStore = {
    currentFilter: 'All',
    tasksList: [],
}

interface IEditTaskPayload {
    newText: string
    id: string
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTasks(state, action: PayloadAction<TaskType>) {
            state.tasksList.push(action.payload);
        },
        removeTask(state, action: PayloadAction<string>) {
            const id = action.payload;
            state.tasksList = state.tasksList.filter(task => task.id !== id);
        },
        toggleComplete(state, action: PayloadAction<string>) {
            const id = action.payload;
            state.tasksList = state.tasksList.map(task => {
                if(task.id === id) {
                    task.isCompleted  = !task.isCompleted ;
                }

                return task;
            });
        },
        editTask(state, action: PayloadAction<IEditTaskPayload>) {
            const {newText, id} = action.payload;

            state.tasksList = state.tasksList.map(task => {
                if(task.id === id) {
                    task.text = newText;
                }

                return task;
            });
        },
        changeCurrentFilter(state, action: PayloadAction<string>) {
            const newFilter = action.payload;

            state.currentFilter = newFilter;
        },
        deleteCompletedTasks(state) {
            state.tasksList = state.tasksList.filter(task => !task.isCompleted );
        },
        toggleStatusAllTasks(state, action: PayloadAction<boolean>) {
            const newStatus = action.payload;
            state.tasksList = state.tasksList.map((task) => {
                task.isCompleted  = newStatus
                return task
            });
        }
    }
})

export default todoSlice.reducer;
export const {  addTasks, 
                removeTask, 
                toggleComplete, 
                editTask, 
                changeCurrentFilter, 
                deleteCompletedTasks, 
                toggleStatusAllTasks
            } = todoSlice.actions;


