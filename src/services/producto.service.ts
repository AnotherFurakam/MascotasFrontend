import { IProducto } from "../models/Producto";

const getAllProductos = async () => {
  const response = await fetch('http://localhost:9090/api/producto');
  const data: IProducto[] = await response.json();
  return data
}

export default {
  getAllProductos
}