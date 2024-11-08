import { Inject, Injectable } from '@nestjs/common';
import { ITodoListRepository } from '../interfaces/todo_list.repository.interface';

@Injectable()
export class ListAllTasksUseCase {
  @Inject('ITodoListRepository')
  private readonly toDoListRepository: ITodoListRepository;

  async execute() {
    const result = await this.toDoListRepository.listAllTask();
    return result;
  }
}
