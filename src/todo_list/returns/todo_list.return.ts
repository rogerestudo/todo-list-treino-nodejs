import { ToDoStatus } from '@prisma/client';

export class ToDoList {
  id: number;
  title: string;
  todo: string | null;
  status: ToDoStatus;

  createdAt: Date;
  updatedAt: Date;
}
