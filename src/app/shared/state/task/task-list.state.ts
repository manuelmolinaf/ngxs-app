import { State, Action, StateContext } from "@ngxs/store";
import { AddTask, DeleteTask, ToggleTask } from "./task-list.actions";
import { Task } from "../../models/task.model";
import { UUID } from 'angular2-uuid';


export interface TaskListStateModel {

  tasks: Task[];

}

@State<TaskListStateModel>({
  name: 'taskList',
  defaults: {
    tasks: []
  }
})
export class TaskListState {
  @Action(AddTask)
  addTask({ patchState, getState }: StateContext<TaskListStateModel>, { name }: AddTask) {

    const state = getState();

    const newTask: Task = {
      id: UUID.UUID(),
      name: name,
      completed: false
    }

    patchState({
      tasks: [...state.tasks, newTask]
    })

  }

  @Action(DeleteTask)
  deleteTask({ patchState, getState }: StateContext<TaskListStateModel>, { id }: DeleteTask) {

    const state = getState();

    const indexToDelete = state.tasks.findIndex((task) => task.id === id);

    if (indexToDelete !== -1) {

      const updatedTaskList = [...state.tasks];
      updatedTaskList.splice(indexToDelete, 1);

      patchState({
        tasks: updatedTaskList
      });
    }

  }

  @Action(ToggleTask)
  toggleTask({ patchState, getState }: StateContext<TaskListStateModel>, { id }: ToggleTask) {

    const state = getState();

    const index = state.tasks.findIndex((task) => task.id === id);

    const updatedTaskList = [...state.tasks];

    if(index != -1) {
      updatedTaskList[index] ={
        ...updatedTaskList[index],
        completed: !updatedTaskList[index].completed
      }
    }
    
    patchState({
      tasks: updatedTaskList
    })

  }


}