import { Component } from '@angular/core';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My Todo List';

  constructor(private modalService: NgbModal) {}

  addTaskClicked() {
    const modalRef = this.modalService.open(TaskFormComponent);
  }
}
