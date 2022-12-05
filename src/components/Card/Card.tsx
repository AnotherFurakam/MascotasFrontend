import React from 'react';
import { IMascota } from '../../models/Mascota';

//Styled components
import CardImg from "../../styledComponents/styled.card.img";


export interface CardInterface {
	mascota: IMascota
}

const Card: React.FC<CardInterface> = ({ mascota }) => {
	return (
		<div className='card shadow-sm border border-2' key={mascota.id}>
			<div className='p-2'>
				<CardImg src={mascota.urlImage} className="card-img-top img-fluid" />
			</div>
			<div className="card-body d-flex flex-column justify-content-center">
				<h5 className="card-title fs-4 text-black__custom">{mascota.name}</h5>
				<p className="card-text">Especie: <span className='fw-bold text-black__custom'>{mascota.especies}</span></p>
				<button className='btn btn-primary__custom text-light'>Ver mas info</button>
			</div>
		</div>
	);
};

export default Card;
