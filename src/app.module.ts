import { TestModule } from './sample1/test.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [TestModule, ConfigModule.forRoot()],
  providers: [],
  controllers: [],
})
export class AppModule {}
