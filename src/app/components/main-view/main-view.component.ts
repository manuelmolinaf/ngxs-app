import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Task } from 'src/app/shared/models/task.model';
import { AddTask, DeleteTask, ToggleTask } from 'src/app/shared/state/task/task-list.actions';
import { TaskListState } from 'src/app/shared/state/task/task-list.state';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent {

  @Select(state => state.taskList.tasks) tasks$!: Observable<Task[]>;

  name:string = '';


  constructor(private store: Store){
    
  }

  addTask() {
    if(this.name){
      this.store.dispatch(new AddTask(this.name));
    }
    this.name = '';    
  }


}
