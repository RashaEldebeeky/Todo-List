import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ColDef,
  GridApi,
  GridReadyEvent,
  FirstDataRenderedEvent,
  CellClickedEvent,
} from 'ag-grid-community';
import { Task } from 'src/app/models/task.model';
import * as _moment from 'moment';
import { fromEvent, Subscription } from 'rxjs';
import { TaskFormComponent } from './../task-form/task-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { updateTask, deleteTask, loadTasks } from '../../store/tasks.actions';
import { columnDefs } from './task-list.const';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit, OnDestroy {
  private gridApi!: GridApi<any>;
  private subscription: Subscription = new Subscription();
  tasks$ = this.store.select('tasks');
  columnDefs: ColDef[] = columnDefs;
  rowData: any[] = [];
  defaultColDef = {
    resizable: true,
    floatingFilter: true,
    filterParams: {
      suppressAndOrCondition: true,
    },
  };
  resizeObservable$ = fromEvent(window, 'resize');

  constructor(
    private modalService: NgbModal,
    private store: Store<{ tasks: any }>
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.tasks$.subscribe((res: any) => {
        this.rowData = res.tasks;
      })
    );
    this.subscription.add(
      this.resizeObservable$.subscribe((evt) => {
        this.gridApi.sizeColumnsToFit();
      })
    );
  }

  onFirstDataRendered(params: FirstDataRenderedEvent) {
    params.api.sizeColumnsToFit();
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.store.dispatch(loadTasks());
  }

  onCellClicked(event: CellClickedEvent) {
    switch (event.colDef.field) {
      case 'edit':
        const modalRef = this.modalService.open(TaskFormComponent);
        modalRef.componentInstance.task = event.data;
        break;
      case 'delete':
        this.deleteTask(event.data);

        break;
      case 'done':
        this.updateTask(event.data);
        break;
    }
  }

  updateTask(task: Task) {
    let updatedTask = Object.assign({}, task);
    updatedTask.done =
      task.done === false ? _moment().format('DD-MM-YYYY') : false;
    this.store.dispatch(updateTask({ task: updatedTask }));
  }

  deleteTask(task: any) {
    this.store.dispatch(deleteTask({ task }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
