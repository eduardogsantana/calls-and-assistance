import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Calls } from "./entities/calls.entity";
import { CallsController } from "./calls.controller";
import { CallsService } from "./calls.service";

@Module({
    imports: [TypeOrmModule.forFeature([Calls])],
    controllers: [CallsController],
    providers: [CallsService]
})
export class CallsModule{}