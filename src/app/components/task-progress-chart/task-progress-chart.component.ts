import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { ApexOptions } from 'ng-apexcharts';
import { chartOptions } from './task-progress-chart.const';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-progress-chart',
  templateUrl: './task-progress-chart.component.html',
  styleUrls: ['./task-progress-chart.component.scss'],
})
export class TaskProgressChartComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  tasks$ = this.store.select('tasks');
  public chartOptions: Partial<ApexOptions> | any;

  constructor(private store: Store<{ tasks: any }>) {
    this.chartOptions = chartOptions;
  }

  ngOnInit() {
    this.subscription.add(
      this.tasks$.subscribe((res: any) => {
        const tasks = res.tasks;
        if (tasks && tasks.length > 0) {
          this.updateChartSeries(tasks);
        }
      })
    );
  }

  updateChartSeries(tasks: Task[]) {
    const completedTasks = this.getNumberOfCompletedTasks(tasks);
    this.chartOptions.series = [completedTasks, tasks.length - completedTasks];
  }

  getNumberOfCompletedTasks(tasks: Task[]) {
    let completed = 0;
    tasks.forEach((task) => {
      if (task.done) completed++;
    });
    return completed;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
