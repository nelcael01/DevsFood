import styled from 'styled-components';


export const Container = styled.div`
    background-color: #136713;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    /* colocar um de cada lado */
    justify-content: space-between;
    align-items: center;

`
export const Logo = styled.img`
    height: 70px;
    width: auto;
`
export const SearchInput = styled.input`
    border: 0;
    border-radius: 25px;
    width: ${props=>props.active ? 300 : 0}px;
    height: 50px;
    background-color: white;
    outline: 0;
    background-image: url('/assests/search.png');
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 10px center ;
    padding-left: 50px;
    cursor: pointer;
    transition: all 0.5s;

`