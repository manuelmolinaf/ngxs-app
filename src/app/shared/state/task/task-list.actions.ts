export class AddTask {
  static readonly type = '[taskList] Add Task';

  constructor(public name: string){

  }

}

export class DeleteTask {
  static readonly type = '[taskList] Delete Task';

  constructor(public id: string){

  }

}

export class ToggleTask {
  static readonly type = '[taskList] Toggle Task';

  constructor(public id: string){

  }

}