import { TestModule } from './sample1/test.module'
import { Test2Module } from './sample2/test2.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [TestModule, Test2Module, ConfigModule.forRoot()],
  providers: [],
  controllers: [],
})
export class AppModule {}
