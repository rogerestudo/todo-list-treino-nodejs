import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create_task.dto';
import { ToDoList } from '../entities/todo_list.entity';
import { ITodoListRepository } from '../interfaces/todo_list.repository.interface';

@Injectable()
export class CreateTaskUseCase {
  @Inject('ITodoListRepository')
  private readonly toDoRepository: ITodoListRepository;

  async execute(createTask: CreateTaskDto): Promise<ToDoList> {
    return await this.toDoRepository.createTask(createTask);
  }
}
