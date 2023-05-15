import {NavLink} from 'react-router-dom';
import Container from "../../styledComponents/styled.container";
import NavbarContainer from "../../styledComponents/styled.navbar";
export interface NavbarInterface { }
import { RiBaiduLine } from "react-icons/ri";

function Navbar  () {
	return (
		<>
			<NavbarContainer className="navbar navbar-dark navbar-expand-md">
				<Container className="container-fluid">
					<RiBaiduLine className='fs-1 text-light me-2' />
					<NavLink className="navbar-brand fs-2" to={'/'}>Happy Pet</NavLink>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink className="nav-link" to="/">Inicio</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to={'gestion'}>Gestión</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to={'/galeria'}>Galeria</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to={'/productos'}>Productos</NavLink>
							</li>
						</ul>
					</div>
				</Container>
			</NavbarContainer>
		</>
	);
};

export default Navbar;
