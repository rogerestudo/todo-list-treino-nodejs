import { Module } from '@nestjs/common';
import { TodoListController } from './todo_list.controller';
import { TodoListRepository } from './repository/todo_list.repository';
import { CreateTaskUseCase } from './use_cases/create_task.use_case';
import { FindTaskByStatusUseCase } from './use_cases/find_task_by_status.use_case';

@Module({
  controllers: [TodoListController],
  providers: [
    FindTaskByStatusUseCase,
    TodoListRepository,
    {
      provide: 'ITodoListRepository',
      useExisting: TodoListRepository,
    },
    CreateTaskUseCase,
  ],
})
export class TodoListModule {}
