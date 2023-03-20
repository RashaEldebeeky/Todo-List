import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskProgressChartComponent } from './components/task-progress-chart/task-progress-chart.component';
import { TasksService } from './services/tasks.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './store/tasks.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TasksEffects } from './store/tasks.effects';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskProgressChartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    StoreModule.forRoot({ tasks: taskReducer }),
    EffectsModule.forRoot([TasksEffects]),
  ],
  providers: [HttpClient, TasksService, NgbActiveModal],
  bootstrap: [AppComponent],
})
export class AppModule {}
