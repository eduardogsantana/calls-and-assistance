import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CallsEntity } from "./entities/calls.entity";
import { Repository } from "typeorm";
import { CreateCallsDTO } from "./dto/calls-create.dto";
import { UpdateCallsDTO } from "./dto/calls-update.dto";

@Injectable()
export class CallsService{
    constructor(@InjectRepository(CallsEntity) private readonly callsRepository: Repository<CallsEntity>){}

    async findAll(): Promise<CallsEntity[]> {
        return this.callsRepository.find();
      }
    
      async findOne(id: number) {
        const call = await this.callsRepository.findOne({
          where: {
            id: id,
          }
        })
    
        if(!call) {
          throw new NotFoundException(`Chamado: ${id} não encontrado`)
        }
    
        return call
      }
    
      async create(createCallsDto: CreateCallsDTO): Promise<CallsEntity> {
        const call = this.callsRepository.create(createCallsDto);
        return this.callsRepository.save(call);
      }
    
      async updatePartial(id: number, updateCallDto: UpdateCallsDTO): Promise<CallsEntity> {
        await this.callsRepository.update(id, updateCallDto);
        return await this.findOne(id);   
      }
  
      async delete(id: number): Promise<void> {
          await this.callsRepository.delete(id);
      }
}
