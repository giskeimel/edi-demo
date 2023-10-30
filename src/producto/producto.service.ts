import { Injectable } from '@nestjs/common';
import { ProductModel } from './productModel';

@Injectable()
export class ProductoService {

  productos = [];

  constructor() {
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
  agregarProducto(productModel: ProductModel) {
    let prod = {
      "id": productModel.id,
      "producto": productModel.product,
      "precio": productModel.price
    }
    this.productos.push(prod);
    return "Producto agregado exitosamente";
  }

}
