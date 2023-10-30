import { Injectable } from '@nestjs/common';
import { ProductModel } from './productModel';

@Injectable()
export class ProductoService {

  //Defino la lista de productos
  productos = [];

  constructor() {
    //Le agrego 2 productos iniciales
    let prod = {
      "id": 1,
      "producto": "salsa de tomate",
      "precio": "54"
    }
    this.productos.push(prod);
    prod = {
      "id": 2,
      "producto": "harina",
      "precio": "304"
    }
    this.productos.push(prod);

  }

  getProducto() {
    return this.productos;
  }

  agregarProducto(modelo: ProductModel) {
    let prod = {
      "id": modelo.id,
      "producto": modelo.product,
      "precio": modelo.price
    }
    //Agrego el producto a la lista
    this.productos.push(prod);
    return "Producto agregado exitosamente";
  }

  modificarProducto(id: string, modelo: ProductModel) {
    //Aca modifico el producto.
    //Hay que completar la funcionalidad
    return "Producto modificado correctamente"
  }

  eliminarProducto(id: string) {
    //aca debo eliminar el producto.
    //Hay que completar la funcionalidad
    //recorro el arreglo de productos
    //si el producto es el que tengo que eliminar
    //lo elimino.
    return "Producto eliminado correctamente"
  }

}
