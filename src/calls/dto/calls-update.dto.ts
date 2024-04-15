import { PartialType } from "@nestjs/mapped-types";
import { CreateCallsDTO } from "./create-calls.dto";

export class UpdateCallsDTO extends PartialType(CreateCallsDTO){
    
}