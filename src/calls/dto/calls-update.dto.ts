import { PartialType } from "@nestjs/mapped-types";
import { CreateCallsDTO } from "./calls-create.dto";

export class UpdateCallsDTO extends PartialType(CreateCallsDTO){
    
}