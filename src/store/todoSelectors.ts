import { createSelector } from "@reduxjs/toolkit";
import { AppState } from ".";
import { FilterStatuses } from "../enuns";

const tasksList = (state: AppState) => state.todo.tasksList;
const currentFilter = (state: AppState) => state.todo.currentFilter;

export const filretedTasksList = createSelector([tasksList,currentFilter], (tasksList, currentFilter) => {
    switch (currentFilter) {
        case FilterStatuses.All:
            return tasksList;
        case FilterStatuses.Active:
            return tasksList.filter(task => !task.isCompleted );
        case FilterStatuses.Completed:
            return tasksList.filter(task => task.isCompleted );
    }
})

export const itemsLeft = createSelector([tasksList], (tasksList) => {
    return tasksList.filter(task => !task.isCompleted ).length;
})