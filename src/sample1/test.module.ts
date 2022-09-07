import { Testcontroller } from './test.controller'
/*
https://docs.nestjs.com/modules
*/
import { TestService } from './test.service'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TestTable } from './test.entity'

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([TestTable])],
  controllers: [Testcontroller],
  providers: [TestService],
})
export class TestModule {}
