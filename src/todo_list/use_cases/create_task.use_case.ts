import { Inject, Injectable } from '@nestjs/common';
import { ToDoList } from '../returns/todo_list.return';
import { CreateTaskDto } from '../dto/create_task.dto';
import { TodoListRepository } from '../repository/todo_list.repository';

@Injectable()
export class CreateTaskUseCase {
  @Inject()
  private readonly todoListRepository: TodoListRepository;

  public async execute(input: CreateTaskDto): Promise<ToDoList> {
    const result = await this.todoListRepository.createTask(input);

    return result;
  }
}
