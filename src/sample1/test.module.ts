import { Testcontroller } from './test.controller'
/*
https://docs.nestjs.com/modules
*/
import { TestService } from './test.service'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule],
  controllers: [Testcontroller],
  providers: [TestService],
})
export class TestModule {}
