import React from 'react';
import { IProducto } from '../../models/Producto';
import CardImg from '../../styledComponents/styled.card.img';
export interface ProductCardInterface {
	producto: IProducto
}

const ProductCard: React.FC<ProductCardInterface> = ({ producto }: ProductCardInterface) => {
	return (
		<div>
			<div className='card shadow-sm border border-2' key={producto.id}>
				<div className='p-2'>
					<CardImg src={producto.urlImage} className="card-img-top img-fluid" />
				</div>
				<div className="card-body d-flex flex-column justify-content-center">
					<h5 className="card-title fs-4 text-black__custom">{producto.name}</h5>
					<p className="card-text text-truncate">Precio: <span className='fw-bold text-black__custom fs-5'>S/. {producto.price}</span></p>
					<button className='btn btn-primary__custom text-light'>Ver mas info</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
