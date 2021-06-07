import React from 'react';
import {LinkArea, LinkIcon} from './MenuItem-styled'
import {useHistory, useLocation} from 'react-router-dom'


function MenuItem({icon,link}) {

    
    const history = useHistory();
    const location = useLocation();

    // usa o location.pathname que pega o link atual da pagina e verifica com a props link, se for igual ele manda true para que o backgroun color seja alterado.
    let isActive = location.pathname == link;

    function handleLinkClick(e) {
        // esse função anula a funcionalidade do link, ou seja, o link para de funcionar 
        e.preventDefault();
        // essa segunda faz a chamada do history e utiliza o push do history para mandar
        history.push(link);
    }

    return(
        <LinkArea active={isActive} href={link} onClick={handleLinkClick}>  
            <LinkIcon src={icon}></LinkIcon>
        </LinkArea>
    )
}

export default MenuItem;