import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoController } from './producto/producto.controller';
import { ProductoService } from './producto/producto.service';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';

@Module({
  imports: [],
  controllers: [AppController, ProductoController, EmployeeController],
  providers: [AppService, ProductoService, EmployeeService],
})
export class AppModule {}
