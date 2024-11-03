import { Inject, Injectable } from '@nestjs/common';
import { ITodoListRepository } from '../interfaces/todo_list.repository.interface';
import { ToDoStatus } from '../helpers/task_status_enum.helper';
import { ToDoList } from '../entities/todo_list.entity';

@Injectable()
export class FindTaskByStatusUseCase {
  @Inject('ITodoListRepository')
  private readonly toDoRepository: ITodoListRepository;

  public async execute(status: ToDoStatus): Promise<ToDoList[]> {
    const result = await this.toDoRepository.getTaskByStatus(status);

    return result;
  }
}
