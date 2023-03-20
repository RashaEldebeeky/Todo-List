import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TasksService],
    });
    service = TestBed.inject(TasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getTasks function', () => {
    expect(service.getTasks).toBeTruthy();
  });

  it('should have getTask function', () => {
    expect(service.getTask).toBeTruthy();
  });

  it('should have createTask function', () => {
    expect(service.createTask).toBeTruthy();
  });

  it('should have updateTask function', () => {
    expect(service.updateTask).toBeTruthy();
  });

  it('should have deleteTask function', () => {
    expect(service.deleteTask).toBeTruthy();
  });
});
