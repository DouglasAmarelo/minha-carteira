import styled from 'styled-components';

export const Grid = styled.section`
  display: grid;
  grid-template-areas:
    'PAGE_ASIDE PAGE_HEADER'
    'PAGE_ASIDE PAGE_CONTENT';
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;
  height: 100vh;
`;
