import React from  'react';
import{Container,CategoryImage} from './CategoryItem-styled'

function CategoryItem({data,activeCategory,setActiveCategory}) {

    function handleCategoryClick() {
        setActiveCategory(data.id);
    }

    return(
        <Container 
            data-tip={data.name}
            data-for='tip-top'
            onClick={handleCategoryClick}
            active={activeCategory} 
            id={data.id}
        >
            <CategoryImage src={data.image} />

        </Container>
    )   
}
export default CategoryItem;