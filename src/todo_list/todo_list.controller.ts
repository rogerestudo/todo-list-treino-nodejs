import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskUseCase } from './use_cases/create_task.use_case';
import { CreateTaskDto } from './dto/create_task.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindTaskByStatusUseCase } from './use_cases/find_task_by_status.use_case';
import { ToDoStatus } from './helpers/task_status_enum.helper';
import { DeleteTaskByIdUseCase } from './use_cases/delete_task_by_id.use_case';
import { GetTaskByIdUseCase } from './use_cases/get_task_by_id.use_case';
import { ToDoList } from './entities/todo_list.entity';
import { ListAllTasksUseCase } from './use_cases/list_all_tasks.use_case';

/*
Descrição
7. Listar Todas as Tarefas

    Como usuário, quero ser capaz de visualizar todas as tarefas na lista para gerenciar meus afazeres.

        Endpoint: GET /task/getAll

        Campos:

        Critérios de Aceitação: Deve retornar Status HTTP 200.
*/

@ApiTags('ToDoList')
@Controller('task')
export class TodoListController {
  @Inject()
  private readonly createTaskUseCase: CreateTaskUseCase;

  @Inject()
  private readonly findTaskByStatusUseCase: FindTaskByStatusUseCase;

  @Inject()
  private readonly deleteTaskByIdUseCase: DeleteTaskByIdUseCase;

  @Inject()
  private readonly getTaskByIdUseCase: GetTaskByIdUseCase;

  @Inject()
  private readonly listAllTasksUseCase: ListAllTasksUseCase;

  @Post('create')
  public async createTask(@Body() task: CreateTaskDto) {
    return await this.createTaskUseCase.execute(task);
  }

  @Get('getAll')
  public async listAllTasks(): Promise<ToDoList[]> {
    return await this.listAllTasksUseCase.execute();
  }

  @Get()
  public async getTaskByStatus(@Query('getByStatus') status: ToDoStatus) {
    return await this.findTaskByStatusUseCase.execute(status);
  }

  @HttpCode(200)
  @Get('getTask/:id')
  public async getTaskById(@Param('id') id: number): Promise<ToDoList> {
    return await this.getTaskByIdUseCase.execute(id);
  }

  @HttpCode(204)
  @Delete('delete/:id')
  public async deleteTaskById(@Param('id') id: number): Promise<void> {
    return await this.deleteTaskByIdUseCase.execute(id);
  }
}
