import { Test2Controller } from './test2.controller'
/*
https://docs.nestjs.com/modules
*/
import { Test2Service } from './test2.service'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule],
  controllers: [Test2Controller],
  providers: [Test2Service],
})
export class Test2Module {}
