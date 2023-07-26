import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { Task } from 'src/app/shared/models/task.model';
import { DeleteTask, ToggleTask } from 'src/app/shared/state/task/task-list.actions';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task:Task = {
    id:'0',
    name:'Name',
    completed:false

  };

  constructor(private store: Store){
    
  }

  toggleTask(){
    this.store.dispatch(new ToggleTask(this.task.id));
  }

  deleteTask(){
    this.store.dispatch(new DeleteTask(this.task.id));
  }

}
