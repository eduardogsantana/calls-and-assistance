import { IsArray, IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Priority } from "../entities/calls.entity";

export class CreateCallsDTO{
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    description: string

    @IsOptional()
    @IsEnum(Priority)
    priority: Priority

    @IsArray()
    equipments: string[]

    @IsOptional()
    @IsString()
    photo?: string
}