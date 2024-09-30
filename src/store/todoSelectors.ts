import { createSelector } from "@reduxjs/toolkit";
import { AppState } from ".";

const tasksList = (state: AppState) => state.todo.tasksList;
const currentFilter = (state: AppState) => state.todo.currentFilter;

export const filretedTasksList = createSelector([tasksList,currentFilter], (tasksList, currentFilter) => {
    switch (currentFilter) {
        case 'All':
            return tasksList;
        case 'Active':
            return tasksList.filter(task => !task.status);
        case 'Completed':
            return tasksList.filter(task => task.status);
    }
})

export const itemsLeft = createSelector([tasksList], (tasksList) => {
    return tasksList.filter(task => !task.status).length;
})