import { Test2Controller } from './test2.controller'
/*
https://docs.nestjs.com/modules
*/
import { Test2Service } from './test2.service'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Test2Table } from './test2.entity'

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Test2Table])],
  controllers: [Test2Controller],
  providers: [Test2Service],
})
export class Test2Module {}
