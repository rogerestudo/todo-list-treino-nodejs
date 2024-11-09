import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create_task.dto';
import { ToDoList } from '../returns/todo_list.return';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoListRepository {
  @Inject()
  private readonly prismaservice: PrismaService;

  public async createTask(data: CreateTaskDto): Promise<ToDoList> {
    const task = await this.prismaservice.toDoList.create({
      data: data,
    });

    return task;
  }
}
