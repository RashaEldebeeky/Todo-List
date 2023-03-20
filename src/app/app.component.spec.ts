import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskProgressChartComponent } from './components/task-progress-chart/task-progress-chart.component';
import { provideMockStore } from '@ngrx/store/testing';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

describe('AppComponent', () => {
  const initialState = { tasks: [] };
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TaskListComponent,
        TaskFormComponent,
        TaskProgressChartComponent,
      ],
      imports: [
        AgGridModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        NgApexchartsModule,
      ],
      providers: [provideMockStore({})],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
      });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'todolist'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Todo List');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain(
      'Todo List'
    );
  });
  it('should call addTaskClicked when clicked', fakeAsync(() => {
    spyOn(component, 'addTaskClicked');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.addTaskClicked).toHaveBeenCalled();
  }));
});
