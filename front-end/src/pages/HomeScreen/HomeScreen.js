import  React,
        {   useState,
            useEffect
        }
from 'react';
import { useHistory } from "react-router-dom";
import {
    Container,
    CategoryArea,
    CategoryList,
    ProductArea,
    ProductList,
    ProductPaginationArea,
    ProductPaginationItem
} from './HomeScreen-styled';
import ProductItem from '../../components/ProductItem/ProductItem'
import Header from '../../components/Header/Header';
import api from '../../api';
import CategoryItem from '../../components/CategoryItem/CategoryItem'

import ReactTooltip from 'react-tooltip';


let searchTimer = null;



export default () => {
    
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories,setCategories] = useState([]);
    const [produts, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState();
    
    const [activeCategory,setActiveCategory] = useState(0)
    const [activePage, setActivePage] = useState(1);
    const [activeSearch, setActiveSearch] = useState('');


    async function getProducts() {
        const prods = await api.getProducts(activeCategory,activePage,activeSearch);
        if (prods.error == '') {
            setProducts(prods.result.data)
            setTotalPages(prods.result.data)
            setActivePage(prods.result.page)
        }
    }


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

    useEffect(() => {
        // clears the timers that are running to start the other
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            setActiveSearch(headerSearch);
        }, 2000);
    }, [headerSearch]);


    useEffect(()=>{
        setProducts([0]);
        getProducts();
    },[activeCategory,activePage,activeSearch])

    

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
            {categories.length>0 &&
                <>
                    <CategoryArea>
                        Selecione uma categoria 
                        <CategoryList>
                            {/* All category */}
                            <CategoryItem 
                                data={{ 
                                    id:0,
                                    name:'Todas as categorias',
                                    image:'/assests/food-and-restaurant.png'
                                }}
                                activeCategory = {activeCategory}
                                setActiveCategory={setActiveCategory}
                             />
                             {/* separate categories */}
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
            {produts.length>0 &&
                <ProductArea>
                    <ProductList>
                        {produts.map((item,index)=>(
                            <ProductItem
                                key={index}
                                data={item}
                            />
                        ))}
                    </ProductList>

                </ProductArea>
            }
            
            {totalPages > 0 &&
                <ProductPaginationArea>
                    {Array(totalPages).fill(0).map((item,index)=>(
                        <ProductPaginationItem 
                         key={index}
                         Active={activePage}
                         current = {index+1}
                         onClick= {()=>setActivePage(index+1)}
                        >
                            {/* writing the page number */}
                            {index+1}
                        </ProductPaginationItem>
                    ))}
                </ProductPaginationArea>
            }
        </Container>
    );
}