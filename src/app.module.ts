import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CallsModule } from './calls/calls.module';
import { AssistanceModule } from './assistance/assistance.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '33226611',
      database: 'callsAndAssistance',
      autoLoadEntities: true,
      entities: [`${__dirname}/**/*.entity{.js, .ts}`],
      synchronize: true
    }),
    CallsModule,
    AssistanceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
