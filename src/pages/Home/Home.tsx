import React, { useContext, useEffect } from 'react';
import { Card } from '../../components/Card';
export interface HomeInterface { }

import MascotaContext from "../../context/MascotaContext";
import Container from '../../styledComponents/styled.container';

const Home: React.FC<HomeInterface> = () => {
	const { state } = useContext(MascotaContext)

	useEffect(() => {
		const title: string[] = document.title.split("-"); 
		document.title = title[0] + " - Home"
	}, [])
	

	return (
		<div className='d-flex justify-content-center'>
			<Container className='my-5 px-2 d-flex flex-column gap-5'>
				<header className='d-flex flex-column gap-5'>
					<div className='row gap-5 gap-md-3 m-2 flex-column-reverse flex-md-row'>
						<div className='col-md d-flex flex-column justify-content-center gap-4'>
							<h1 className='display-5 fw-normal text-black__custom  text-md-start'>Happy pet</h1>
							<p className='text-center text-md-start'>
								Veterinaria enfocado en brindar la mejor atención para tu mascota, todo lo que necesita en un solo lugar.
								Contamos con instalaciones de la mejor calidad y comodidad para tu mascota 😊
							</p>
							<button className='btn  btn-primary__custom fs-5 px-3 py-3 text-light w-50 mx-auto'>Registratrar mascota!!!</button>
						</div>
						<div className='col-md'>
							<img src="https://elcomercio.pe/resizer/kdpOnVc-NEda1kybtWrNus0oQ6I=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/M36IGMLO7NGLHNM7222HJHMQCA.jpg" className='img-fluid shadow rounded-3' />
						</div>
					</div>
				</header>
				<section className='d-flex gap-4 flex-column'>
					<h1 className='text-black__custom text-decoration-underline'>Top mascotas</h1>
					<div className='galery-grid'>
						{
							state.mascotas && state.mascotas.map((m, i) => i+1 <= 8 && <Card key={m.id} mascota={m} />)
						}
					</div>
				</section>
			</Container>
		</div>
	);
};

export default Home;
