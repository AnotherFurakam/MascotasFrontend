import styled from 'styled-components';

const Galery = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-rows: 23vw;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr));
`

export default Galery;