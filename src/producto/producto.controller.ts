import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductModel } from './productModel';

@Controller('producto')
export class ProductoController {
//Toda funcionalidad va adentro de las llaves.
constructor(private readonly servicio: ProductoService) {}

//El GET es para obtener cosas
    @Get()
    getProducto() {
        //el this quiere decir que busca algo en el mismo archivo.
        //servicio es la variable de tipo ProductoService declarada en el constructor
        //getProducto es la funcion que esta en ProductoService
        return this.servicio.getProducto();
    }

    //El POST es para crear cosas
    //ProductModel es el JSON
    @Post()
    //con @Body le digo que lo que mando en el Body de Postman va a ser de tipo ProductoModel
    agregarProducto(@Body() modelo: ProductModel) {
        return this.servicio.agregarProducto(modelo);

    }
    //Asi va a ser el body que pongo en POSTMAN de tipo Json
    //{
    //    "id": 7,
    //    "product": "jugo tang",
    //    "price": 123
    //}

    //El PUT es para modificar objetos.
    //Como modifico uno solo, le paso el id en la ruta /productos/id
    //y le paso el body con la nueva informacion.
    @Put(':id')
    modificarProducto(@Body() modelo: ProductModel, @Param('id') id: string){
        return this.servicio.modificarProducto(id, modelo);
    }

    //El DELETE es para eliminar objetos
    // Como elimino uno solo, le paso el id en la ruta /productos/id
    @Delete(':id')
    eliminarProducto(@Param('id') id: string) {
        return this.servicio.eliminarProducto(id);
    }


}
