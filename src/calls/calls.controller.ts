import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CallsEntity } from "./entities/calls.entity";
import { CreateCallsDTO } from "./dto/calls-create.dto";
import { UpdateCallsDTO } from "./dto/calls-update.dto";
import { CallsService } from "./calls.service";

@Controller('calls')
export class CallsController{
    constructor(private readonly callsService: CallsService){}

    @Get()
    async findAll(): Promise<CallsEntity[]>{
        return this.callsService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<CallsEntity>{
        return this.callsService.findOne(id)
    }

    @Post()
    async create(@Body() createCasllDto: CreateCallsDTO): Promise<CallsEntity>{
        return this.callsService.create(createCasllDto)
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateCallsDto: UpdateCallsDTO): Promise<CallsEntity> {
        return this.callsService.updatePartial(id, updateCallsDto)
    }

    @Delete(':id')
    async delete(@Param('id') id:number): Promise<void>{
        return this.callsService.delete(id)
    }
}