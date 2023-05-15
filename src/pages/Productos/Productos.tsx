import React, { useEffect, useState } from 'react';
import { ProductCard } from '../../components/ProductCard';
import { IProducto } from '../../models/Producto';
import productoService from '../../services/producto.service';
import Galery from '../../styledComponents/styled.galery';
export interface ProductosInterface { }

const Productos: React.FC<ProductosInterface> = () => {

	const [productos, setProductos] = useState<IProducto[]>([] as IProducto[])

	const getAllProductos = async () => {
		const response = await productoService.getAllProductos()
		setProductos(response)
	}

	useEffect(() => {
		getAllProductos()
		const title: string[] = document.title.split("-");
		document.title = title[0] + " - Productos"
	}, [])

	return (
		<div className='container my-5'>
			<h1 className='display-6'>Productos</h1>
			<Galery>
				{
					productos?.map(p =>
						<ProductCard producto={p} />
					)
				}
			</Galery>
		</div>
	);
};

export default Productos;
