import styled from "styled-components";

const TableContainer = styled.div`
  border: 2px solid #ffbf75;
  border-radius: 10px;
  padding: 20px 10px;
  height: auto;
  background: #f9f9f9f9;
  & table{ 
    border-spacing: 2px 0px;
    border-collapse: separate;
    & thead{
      background: #ffa43a;
      color: #fff;
      & tr th{
      }
    }
    & tbody tr td{
      padding: 15px;
      min-width: 50px;
      max-width: 160px;
      background-color: #ffffff;
    }
  }
`

export default TableContainer;