import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductModel } from './productModel';

@Controller('producto')
export class ProductoController {
//Toda funcionalidad va adentro de las llaves.
constructor(private readonly servicio: ProductoService) {}

    @Get()
    getProducto() {
        return this.servicio.getProducto();
    }

    @Post()
    agregarProducto(@Body() productModel: ProductModel) {
        return this.servicio.agregarProducto(productModel);

    }


}
