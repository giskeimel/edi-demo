import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {

    getEmployee(id): string {

        return 'Gisele Keimel : ' + id;
    }
}
