import { createAction, props } from '@ngrx/store';
import { Task } from '../models/task.model';

export const loadTasks = createAction('load tasks');
export const createTask = createAction('create task', props<{ task: any }>());
export const updateTask = createAction('update task', props<{ task: Task }>());
export const deleteTask = createAction('delete task', props<{ task: any }>());
export const loadTasksSuccess = createAction(
  'load tasks success',
  props<{ tasks: Task[] }>()
);
export const createTaskSuccess = createAction(
  'create task success',
  props<{ task: Task }>()
);
export const updateTaskSuccess = createAction(
  'update task success',
  props<{ task: Task }>()
);
export const deleteTaskSuccess = createAction(
  'delete task success',
  props<{ task: Task }>()
);
