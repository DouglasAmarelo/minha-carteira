import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  grid-area: PAGE_CONTENT;
`;
