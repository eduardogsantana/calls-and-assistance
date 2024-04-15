import { PartialType } from "@nestjs/mapped-types";
import { CreateAssistanceDTO } from "./create-assistance.dto";

export class UpdateAssistanceDTO extends PartialType(CreateAssistanceDTO){}