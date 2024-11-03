import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { CreateTaskUseCase } from './use_cases/create_task.use_case';
import { CreateTaskDto } from './dto/create_task.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindTaskByStatusUseCase } from './use_cases/find_task_by_status.use_case';
import { ToDoStatus } from './helpers/task_status_enum.helper';

@ApiTags('ToDoList')
@Controller('task')
export class TodoListController {
  @Inject()
  private readonly createTaskUseCase: CreateTaskUseCase;

  @Inject()
  private readonly findTaskByStatusUseCase: FindTaskByStatusUseCase;

  @Post('create')
  public async createTask(@Body() task: CreateTaskDto) {
    return await this.createTaskUseCase.execute(task);
  }

  @Get()
  public async getTaskByStatus(@Query('getByStatus') status: ToDoStatus) {
    return await this.findTaskByStatusUseCase.execute(status);
  }
}
