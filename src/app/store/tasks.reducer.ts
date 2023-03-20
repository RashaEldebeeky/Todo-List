import {
  loadTasksSuccess,
  createTaskSuccess,
  updateTaskSuccess,
  deleteTaskSuccess,
} from './tasks.actions';
import { createReducer, on } from '@ngrx/store';
import { Task } from '../models/task.model';

const initialState: { tasks: Task[] } = { tasks: [] };

export const taskReducer = createReducer(
  initialState,

  on(loadTasksSuccess, (state, payload) => ({
    ...state,
    tasks: payload.tasks,
  })),
  on(createTaskSuccess, (state, payload) => ({
    ...state,
    tasks: state.tasks.concat(payload.task),
  })),
  on(updateTaskSuccess, (state, payload) => ({
    ...state,
    tasks: state.tasks.map((task) => {
      if (task.id === payload.task.id) task = payload.task;
      return task;
    }),
  })),
  on(deleteTaskSuccess, (state, payload) => ({
    ...state,
    tasks: state.tasks.filter((task) => {
      return task.id !== payload.task.id;
    }),
  }))
);
