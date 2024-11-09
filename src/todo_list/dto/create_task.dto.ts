import { ApiProperty } from '@nestjs/swagger';
import { ToDoStatus } from '@prisma/client';
import {
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    title: 'Task title',
    description: 'The title of the task',
    example: 'Task 1',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(50)
  title: string;

  @ApiProperty({
    title: 'Task description',
    description: 'The description of the task',
    example: 'This is the first task',
  })
  @IsString()
  @MaxLength(200)
  todo: string;

  @ApiProperty({
    title: 'Task status',
    description: 'The status of the task',
    example: ToDoStatus.PENDING,
    enum: ToDoStatus,
  })
  @IsNotEmpty()
  @IsEnum(ToDoStatus)
  status: ToDoStatus;
}
