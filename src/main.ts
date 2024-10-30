import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'module-alias/register';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('ai-employment-consulting API')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('ai-employment-consulting')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.enableCors({ origin: '*' });

  await app.listen(3000);
}

bootstrap();
