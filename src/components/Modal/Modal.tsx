import ReactDOM from "react-dom";
import ModalContainer from "../../styledComponents/styled.modal";

export interface ModalInterface {
	isOpenned: boolean,
	children: React.ReactNode
}

const Modal: React.FC<ModalInterface> = ({ isOpenned, children }) => {

	const modal = document.getElementById("modal") as HTMLElement

	return (
		ReactDOM.createPortal(
			isOpenned &&
			<ModalContainer>
				<div className="bg-light p-4 rounded-2 form-continer">
					{children}
				</div>
			</ModalContainer>
			, modal
		)
	);
};

export default Modal;
