import { Module } from '@nestjs/common';
import { TodoListController } from './todo_list.controller';
import { CreateTaskUseCase } from './use_cases/create_task.use_case';
import { TodoListRepository } from './repository/todo_list.repository';

@Module({
  controllers: [TodoListController],
  providers: [CreateTaskUseCase, TodoListRepository],
})
export class TodoListModule {}
