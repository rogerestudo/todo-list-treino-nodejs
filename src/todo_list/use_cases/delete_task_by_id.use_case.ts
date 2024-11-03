import { Inject, Injectable } from "@nestjs/common";
import { ITodoListRepository } from "../interfaces/todo_list.repository.interface";

@Injectable()
export class DeleteTaskByIdUseCase{
    
    @Inject('ITodoListRepository')
    private readonly toDoRepository: ITodoListRepository;

    async execute (id: number): Promise<void> {
      const result = await this.toDoRepository.deleteTaskById(id);
    } 

}