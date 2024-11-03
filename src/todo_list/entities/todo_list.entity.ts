import { ToDoStatus } from '../helpers/task_status_enum.helper';

export class ToDoList {
  id: number;
  title: string;
  todo: string;
  status: ToDoStatus;
  createdAt: Date;
  updatedAt: Date;
}
