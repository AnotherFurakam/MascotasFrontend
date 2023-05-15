import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  background-color: rgba(32, 32, 32, 0.425);
  > div {
    z-index: 2;
    width: 95%;
    max-width: 800px;
    overflow: hidden;
  }
`

export default Modal