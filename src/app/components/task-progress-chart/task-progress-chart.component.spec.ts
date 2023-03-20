import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { TaskProgressChartComponent } from './task-progress-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';

describe('TaskProgressChartComponent', () => {
  let component: TaskProgressChartComponent;
  let fixture: ComponentFixture<TaskProgressChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskProgressChartComponent],
      imports: [NgApexchartsModule],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskProgressChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
