import {
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ToDoStatus } from '../helpers/task_status_enum.helper';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ description: 'Título da tarefa' })
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(100)
  title: string;

  @ApiProperty({ description: 'Corpo da tarefa' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(1000)
  todo: string;

  @ApiProperty({
    description: 'Status da tarefa',
    enum: ToDoStatus,
    example: ToDoStatus.PENDING,
  })
  @IsNotEmpty()
  @IsEnum(ToDoStatus)
  status: ToDoStatus;
}
