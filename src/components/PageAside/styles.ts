import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};
  grid-area: PAGE_ASIDE;
`;
