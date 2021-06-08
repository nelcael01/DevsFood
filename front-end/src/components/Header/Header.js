import React,{useState} from 'react';
import {Container,Logo,SearchInput} from './Header-styled'

function Header({search,onSearch}) {

    const[inputActive, setinputActive] = useState(search == '' ? false : true);

    function handleChange(e) {
        onSearch(e.target.value)
    }
    
    // quando o campo está em foco
    function handleInputFocus() {
        setinputActive(true)
    }
    // quando o campo não está em foco
    function handleInputBlur(e) {
        if (search == '') {
            setinputActive(false)
        }
    }

    return(
        <Container>
            <Logo src='/assests/logo.png'></Logo>
            <SearchInput 
                type='text'
                value={search}
                onChange={handleChange}
                placeholder='Pesquise aqui...'
                active={inputActive}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            ></SearchInput>
        </Container>
    )
}

export default Header;
