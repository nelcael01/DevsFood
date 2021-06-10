// criação dos styled components
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: red;

`;

export const Menu = styled.div`
    display: flex;
    background-color: #136713;
    width: 80px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const PageBody = styled.div`
    display: flex;
    background-color: #00980d;
    background-image: url('/assests/bg.png');
    /* flex 1 faz esse elemento pegar o restante da pagina */
    flex: 1;
    /* fazendo o scroll da parte verde rodar */
    overflow-y: auto;
    
`;