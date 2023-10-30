import { Controller, Get, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
constructor(private readonly servicio: EmployeeService) {}

@Get (':id')
getEmployee(@Param('id') id): string {
    return this.servicio.getEmployee(id);
}

}
