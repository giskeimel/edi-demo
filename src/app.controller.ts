import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

//Punto de acceso cuando accedemos a una API
@Controller('api')
export class AppController {

  //crea una variable appService que es de tipo AppService
  //Necesitamos definir esto para poder llamar al otro metodo.
  constructor(private readonly appService: AppService) {}

  @Get() //Anotacion
  getHello(): string {
    return this.appService.getHello();
  }
}
