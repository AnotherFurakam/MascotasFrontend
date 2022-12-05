import React from 'react';
import FooterContainer from "../../styledComponents/styled.footer.container";
import Container from "../../styledComponents/styled.container";

export interface FooterInterface { }

const Footer: React.FC<FooterInterface> = () => {
	return (
		<FooterContainer className='p-2 d-flex justify-content-center'>
			<Container>
				<p className='m-0 text-center text-black__custom'>Aplicación desarrollada por el grupo 8</p>
			</Container>
		</FooterContainer>
	);
};

export default Footer;
