import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { TasksService } from './../services/tasks.service';
import {
  loadTasks,
  createTask,
  updateTask,
  deleteTask,
  loadTasksSuccess,
  createTaskSuccess,
  updateTaskSuccess,
} from './tasks.actions';
import { Task } from '../models/task.model';
@Injectable()
export class TasksEffects {
  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTasks),
      switchMap(() =>
        this.tasksService
          .getTasks()
          .pipe(map((tasks: Task[]) => loadTasksSuccess({ tasks })))
      )
    )
  );
  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTask),
      switchMap(({ task }) =>
        this.tasksService
          .createTask(task)
          .pipe(map((task: Task) => createTaskSuccess({ task })))
      )
    )
  );
  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTask),
      switchMap(({ task }) =>
        this.tasksService
          .updateTask(task.id, task)
          .pipe(map((task: Task) => updateTaskSuccess({ task })))
      )
    )
  );
  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTask),
      switchMap(({ task }) =>
        this.tasksService.deleteTask(task.id).pipe(map(() => loadTasks()))
      )
    )
  );
  constructor(private actions$: Actions, private tasksService: TasksService) {}
}
