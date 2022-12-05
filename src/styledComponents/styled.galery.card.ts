import styled from 'styled-components';

const GaleryCard = styled.div`
  border: 2px solid #ddd;
  border-radius: 5px;
  padding: 5px;
  && img {
    border-radius: 4px;
    width: 100%;
    height: 100%;
    object-fit: cover
  }
`

export default GaleryCard;