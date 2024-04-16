import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { AssistanceEntity, Dificulty, Status } from "../entities/assistance.entity";

export class CreateAssistanceDTO{
    @IsString()
    technicalName: string

    @IsOptional()
    @IsEnum(Status)
    status: Status

    @IsOptional()
    @IsEnum(Dificulty)
    dificulty: Dificulty

    @IsOptional()
    @IsNumber()
    calls: AssistanceEntity

}