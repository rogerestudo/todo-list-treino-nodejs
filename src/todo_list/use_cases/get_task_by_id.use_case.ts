import { Inject, Injectable } from "@nestjs/common";
import { ToDoList } from "../entities/todo_list.entity";
import { ITodoListRepository } from "../interfaces/todo_list.repository.interface";

@Injectable()
export class GetTaskByIdUseCase{

    @Inject('ITodoListRepository')
    public readonly toDoListRespository: ITodoListRepository;

    public async execute(id: number): Promise<ToDoList>{
        return await this.toDoListRespository.getTaskById(id);
    }

}