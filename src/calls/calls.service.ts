import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Calls } from "./entities/calls.entity";
import { Repository } from "typeorm";
import { CreateCallsDTO } from "./dto/create-calls.dto";
import { UpdateCallsDTO } from "./dto/calls-update.dto";

@Injectable()
export class CallsService{
    constructor(@InjectRepository(Calls) private readonly callsRepository: Repository<Calls>){}

    async findAll(): Promise<Calls[]> {
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
    
      async create(createCallsDto: CreateCallsDTO): Promise<Calls> {
        const call = this.callsRepository.create(createCallsDto);
        return this.callsRepository.save(call);
      }
    
      async update(
        id: number,
        updateCallsDto: UpdateCallsDTO,
      ): Promise<Calls> {
        const call = await this.findOne(id);
        this.callsRepository.merge(call, updateCallsDto);
        return this.callsRepository.save(call);
      }
    
      async delete(id: number): Promise<void> {
        const call = await this.findOne(id);
        await this.callsRepository.remove(call);
      }
}
