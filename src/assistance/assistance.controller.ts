import { BadRequestException, Body, Controller, Delete, Get, Inject, Param, Patch, Post } from "@nestjs/common";
import { AssistanceService } from "./assistance.service";
import { AssistanceEntity } from "./entities/assistance.entity";
import { CreateAssistanceDTO } from "./dto/create-assistance.dto";
import { UpdateAssistanceDTO } from "./dto/update-assistance.dto";

@Controller('assistance')
export class AssistanceController {
  constructor(private readonly assistanceService: AssistanceService) {}

  @Post()
  create(@Body() createAssistanceDto: CreateAssistanceDTO) {
    return this.assistanceService.createAssistance(createAssistanceDto);
  }

  @Get()
  findAll() {
    return this.assistanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assistanceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssistanceDto: UpdateAssistanceDTO) {
    return this.assistanceService.updatePartial(+id, updateAssistanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assistanceService.delete(+id);
  }
}