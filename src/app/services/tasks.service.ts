import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasksURL = environment.apiUrl + 'tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.tasksURL);
  }

  getTask(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.tasksURL}/${id}`);
  }

  createTask(task: Task): Observable<any> {
    return this.http.post<any[]>(this.tasksURL, task);
  }

  updateTask(id: number, task: Task) {
    return this.http.patch<any>(`${this.tasksURL}/${id}`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`${this.tasksURL}/${id}`);
  }
}
