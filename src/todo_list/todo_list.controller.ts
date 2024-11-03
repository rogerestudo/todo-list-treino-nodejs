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

@ApiTags('ToDoList')
@Controller('task')
export class TodoListController {
  @Inject()
  private readonly createTaskUseCase: CreateTaskUseCase;

  @Inject()
  private readonly findTaskByStatusUseCase: FindTaskByStatusUseCase;

  @Inject()
  private readonly deleteTaskByIdUseCase: DeleteTaskByIdUseCase;

  @Post('create')
  public async createTask(@Body() task: CreateTaskDto) {
    return await this.createTaskUseCase.execute(task);
  }

  @Get()
  public async getTaskByStatus(@Query('getByStatus') status: ToDoStatus) {
    return await this.findTaskByStatusUseCase.execute(status);
  }

  @HttpCode(204)
  @Delete('delete/:id')
  public async deleteTaskById(@Param('id') id: number): Promise<void> {
    return await this.deleteTaskByIdUseCase.execute(id);
  }
}
