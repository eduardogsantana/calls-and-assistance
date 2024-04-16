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
    
      async update(id: number, updateCallsDto: UpdateCallsDTO,):Promise<CallsEntity> {
        const call = await this.findOne(id);
        this.callsRepository.merge(call, updateCallsDto);
        return this.callsRepository.save(call);
      }
    
      async delete(id: number): Promise<void> {
        const call = await this.findOne(id);
        await this.callsRepository.remove(call);
      }
}
