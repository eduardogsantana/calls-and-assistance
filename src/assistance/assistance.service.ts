import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Assistance } from "./entities/assistance.entity";
import { Repository } from "typeorm";
import { UpdateAssistanceDTO } from "./dto/update-assistance.dto";
import { CreateAssistanceDTO } from "./dto/create-assistance.dto";

@Injectable()
export class AssistanceService {
  constructor(
    @InjectRepository(Assistance)
    private readonly assistanceRepository: Repository<Assistance>,
  ) {}

  async findAll(): Promise<Assistance[]> {
    return this.assistanceRepository.find();
  }

  async findOne(id: number) {
    const assistance = await this.assistanceRepository.findOne({
      where: {
        id: id,
      }
    })

    if(!assistance) {
      throw new NotFoundException(`Atendimento: ${id} não encontrado`)
    }

    return assistance
  }

  async create(createAssistanceDto: CreateAssistanceDTO): Promise<Assistance> {
    const assistance = this.assistanceRepository.create(createAssistanceDto);
    return this.assistanceRepository.save(assistance);
  }

  async update(
    id: number,
    updateAssistanceDto: UpdateAssistanceDTO,
  ): Promise<Assistance> {
    const assistance = await this.findOne(id);
    this.assistanceRepository.merge(assistance, updateAssistanceDto);
    return this.assistanceRepository.save(assistance);
  }

  async delete(id: number): Promise<void> {
    const assistance = await this.findOne(id);
    await this.assistanceRepository.remove(assistance);
  }
}