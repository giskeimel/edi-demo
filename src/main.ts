import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//Archivo que es el punto de entrada del servidor
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Le decimos a la aplicacion que escuche en el puerto este.
  await app.listen(3008);
}
bootstrap();
