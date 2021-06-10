import  React,
        {   useState,
            useEffect
        }from 'react';
import { useHistory } from "react-router-dom";
import {
    Container,
    CategoryArea,
    CategoryList 
    } from './HomeScreen-styled';
import Header from '../../components/Header/Header';
import api from '../../api';
import CategoryItem from '../../components/CategoryItem/CategoryItem'

import ReactTooltip from 'react-tooltip';


export default () => {
    
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories,setCategories] = useState([]);

    const [activeCategory,setActiveCategory] = useState(0)

    useEffect(()=>{
        async function getCategories() {
            const cat = await api.getCategorias();
            // verificação se não tem nenhum erro
            if (cat.error == '') {
                // setando as categorias recebidas no categories
                setCategories(cat.result);
            }
            ReactTooltip.rebuild();
        }
        getCategories();
    },[])

    useEffect(()=>{
        
        
    },[activeCategory])

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
            {categories.length>0 &&
                <>
                    <CategoryArea>
                        Selecione uma categoria 
                        <CategoryList>
                            {/* todas as categorias */}
                            <CategoryItem 
                                data={{ 
                                    id:0,
                                    name:'Todas as categorias',
                                    image:'/assests/food-and-restaurant.png'
                                }}
                                activeCategory = {activeCategory}
                                setActiveCategory={setActiveCategory}
                             />
                             {/* Categorias separadas */}
                            {categories.map((item,index)=>(
                                <CategoryItem
                                    key = {index}
                                    data = {item}
                                    activeCategory = {activeCategory}
                                    setActiveCategory={setActiveCategory}
                                 />
                            ))}
                        </CategoryList>
                    </CategoryArea>
                </>
            }
        </Container>
    );
}