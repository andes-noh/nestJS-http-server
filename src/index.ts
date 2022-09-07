import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
// swagger 관련
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
// fastify 관련
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'

async function bootstrap() {
  const fastify = new FastifyAdapter()
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastify)

  const config = new DocumentBuilder()
    .setTitle('NestJS-Http-Server-With-Fastify-Sample')
    .setDescription('sample project')
    .setVersion('0.1')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('swagger', app, document)

  await app.listen(process.env.HTTP_PORT ?? 9000, '0.0.0.0')
}

bootstrap()
