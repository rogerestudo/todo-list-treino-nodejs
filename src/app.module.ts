import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { TodoListModule } from './todo_list/todo_list.module';

@Module({
  imports: [PrismaModule, TodoListModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
