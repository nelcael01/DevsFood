// criação dos styled components
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: red;

`;

export const Menu = styled.div`
    display: flex;
    background-color: #00ff00;
    width: 80px;
`;

export const PageBody = styled.div`
    display: flex;
    background-color: #0000ff ;
    /* flex 1 faz esse elemento pegar o restante da pagina */
    flex: 1;
    
`;