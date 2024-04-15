import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { AssistanceService } from "./assistance.service";
import { Assistance } from "./entities/assistance.entity";
import { CreateAssistanceDTO } from "./dto/create-assistance.dto";
import { UpdateAssistanceDTO } from "./dto/update-assistance.dto";

@Controller('assistance')
export class AssistanceController {
  constructor(private readonly assistanceService: AssistanceService) {}

  @Get()
  async findAll(): Promise<Assistance[]> {
    return this.assistanceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Assistance> {
    return this.assistanceService.findOne(id);
  }

  @Post()
  async create(@Body() createAssistanceDto: CreateAssistanceDTO): Promise<Assistance> {
    return this.assistanceService.create(createAssistanceDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAssistanceDto: UpdateAssistanceDTO,
  ): Promise<Assistance> {
    return this.assistanceService.update(id, updateAssistanceDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.assistanceService.delete(id);
  }
}