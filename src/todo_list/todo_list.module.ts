import { Module } from '@nestjs/common';
import { TodoListController } from './todo_list.controller';

@Module({
  controllers: [TodoListController],
  providers: [],
})
export class TodoListModule {}
