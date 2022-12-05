import styled from "styled-components";

export const Button = styled.button`
  width: 120px;
  height: 50px;
  font-size: 17px;
  background-color: ${(props) => props.color};
  opacity: .8;
  color: #ffffff;
  border: none;
  border-radius: 5px;

  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: .8;
  }
  &:disabled {
    opacity: .3;
  }
`