import React,{useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Container, Titulo } from './styled';
import Header from '../../components/Header/Header';
import api from '../../api';

export default () => {
    
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');

    useEffect(()=>{
        async function getCategories() {
            const categories = await api.getCategorias();
            console.log(categories);
        }
        getCategories();
    },[])

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />

        </Container>
    );
}