import { useContext, useEffect } from "react";

//Styled component
import Container from "../../styledComponents/styled.container";
import Galery from "../../styledComponents/styled.galery";

//Context
import MascotaContext from "../../context/MascotaContext";
import GaleryCard from "../../styledComponents/styled.galery.card";

export interface GaleriaInterface { }


const Galeria: React.FC<GaleriaInterface> = () => {
	const { state } = useContext(MascotaContext)

	useEffect(() => {
		const title: string[] = document.title.split("-");
		document.title = title[0] + " - Galería"
	}, [])

	return (

		<div className="d-flex justify-content-center">
			<Container className="my-5">
				<div>
					<h1 className="display-5">Galeria</h1>
					<Galery className="mt-4">
						{
							state.mascotas && state.mascotas.map(m => <GaleryCard key={m.id}><img src={m.urlImage} /></GaleryCard>)
						}
					</Galery>
				</div>
			</Container>
		</div>
	);
};

export default Galeria;
