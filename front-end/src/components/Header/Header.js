import React,{useState} from 'react';
import {Container,Logo,SearchInput} from './Header-styled'

function Header({search,onSearch}) {

    const[inputActive, setInputActive] = useState(false);
    const [value, setValue] = useState('');
    // quando o campo está em foco
    function handleInputFocus() {
        setInputActive(true)
    }
    // quando o campo não está em foco
    function handleInputBlur(e) {
        if (search=='') {
           setInputActive(false)
        } 
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
                value={search}
                onChange={e=>onSearch(e.target.value)}
                
            ></SearchInput>
        </Container>
    )
}

export default Header;
