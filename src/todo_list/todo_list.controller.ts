import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateTaskUseCase } from './use_cases/create_task.use_case';
import { ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create_task.dto';
import { ToDoList } from './returns/todo_list.return';

//localhost:3000/task
@Controller('task')
@ApiTags('ToDoList')
export class TodoListController {
  @Inject()
  private readonly createTaskUseCase: CreateTaskUseCase;

  //localhost:3000/task/create
  @Post('create')
  public async createTask(@Body() data: CreateTaskDto): Promise<ToDoList> {
    const result = await this.createTaskUseCase.execute(data);

    return result;
  }
}

/*
POST - enviar dados para o servidor
PUT - atualizar todos dados no servidor
PATCH - atualizar dados individualmente no servidor
GET - buscar dados do servidor
DELETE - deletar dados do servidor
*/
