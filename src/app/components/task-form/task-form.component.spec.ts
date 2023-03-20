import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormComponent } from './task-form.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { provideMockStore } from '@ngrx/store/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskFormComponent],
      imports: [NgbModule, FormsModule, ReactiveFormsModule],
      providers: [NgbActiveModal, provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be valid', () => {
    component.taskFormGroup.setValue({
      id: null,
      label: 'task1',
      category: '',
      description: '',
      done: false,
    });
    expect(component.taskFormGroup.valid).toEqual(true);
  });
  it('should require a label', () => {
    component.taskFormGroup.setValue({
      id: null,
      label: '',
      category: '',
      description: '',
      done: false,
    });
    expect(component.taskFormGroup.valid).toEqual(false);
  });
});
