import React,{useState} from 'react';
import {Container,Logo,SearchInput} from './Header-styled'

function Header(props) {

    const[inputActive, setinputActive] = useState(false);

    // quando o campo está em foco
    function handleInputFocus() {
        setinputActive(true)
    }
    // quando o campo não está em foco
    function handleInputBlur(e) {
      setinputActive(false)
    }

    return(
        <Container>
            <Logo src='/assests/logo.png'></Logo>
            <SearchInput 
                type='text'
                placeholder='Pesquise aqui...'
                active={inputActive}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            ></SearchInput>
        </Container>
    )
}

export default Header;
