import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Assistance } from "./entities/assistance.entity";
import { AssistanceController } from "./assistance.controller";
import { AssistanceService } from "./assistance.service";

@Module({
    imports: [TypeOrmModule.forFeature([Assistance])],
    controllers: [AssistanceController],
    providers: [AssistanceService],
  })
  export class AssistanceModule {}