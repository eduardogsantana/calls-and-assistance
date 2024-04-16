import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AssistanceEntity } from "./entities/assistance.entity";
import { Repository } from "typeorm";
import { UpdateAssistanceDTO } from "./dto/update-assistance.dto";
import { CreateAssistanceDTO } from "./dto/create-assistance.dto";

@Injectable()
export class AssistanceService {
  constructor(
    @InjectRepository(AssistanceEntity)
    private readonly AssistanceRepository: Repository<AssistanceEntity>,
  ){}

  async createAssistance(createAssistanceDto: CreateAssistanceDTO): Promise<AssistanceEntity> {
    return this.AssistanceRepository.save({
      ...createAssistanceDto,
    })
    }

    async findAll() {
      return this.AssistanceRepository.find({
        relations: {
          calls: true,
        },
      });
    }

    async findOne(id: number): Promise<AssistanceEntity | null> {
        return this.AssistanceRepository.findOne({ where: { id } });
    }

    async updatePartial(id: number, updateAssistanceDto: UpdateAssistanceDTO): Promise<AssistanceEntity> {
      await this.AssistanceRepository.update(id, updateAssistanceDto);
      return await this.findOne(id);   
    }

    async delete(id: number): Promise<void> {
        await this.AssistanceRepository.delete(id);
    }
}