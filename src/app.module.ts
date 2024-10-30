import { Module } from '@nestjs/common';
import { TodoListModule } from './todo_list/todo_list.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TodoListModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
