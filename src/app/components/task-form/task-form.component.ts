import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task.model';
import { Store } from '@ngrx/store';
import { createTask, updateTask } from '../../store/tasks.actions';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  @Input() task: Task | undefined;
  taskFormGroup: any;
  inputValue?: string;
  options: string[] = [];

  constructor(
    public activeModal: NgbActiveModal,
    private store: Store<{ tasks: any }>
  ) {}

  ngOnInit(): void {
    this.taskFormGroup = new FormGroup({
      id: new FormControl(this.task ? this.task.id : null),
      label: new FormControl(
        this.task ? this.task.label : '',
        Validators.required
      ),
      description: new FormControl(this.task ? this.task.description : ''),
      category: new FormControl(this.task ? this.task.category : ''),
      done: new FormControl(this.task ? this.task.done : false),
    });
  }

  submitClicked(task: Task) {
    let updatedTask = Object.assign({}, task);
    if (updatedTask && updatedTask.id) {
      this.store.dispatch(updateTask({ task: updatedTask }));
    } else {
      this.store.dispatch(createTask({ task: updatedTask }));
    }
    this.activeModal.close({ created: true });
  }
}
