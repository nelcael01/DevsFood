import React from 'react';
import {
    Container,
    ProductButton,
    ProductButtonArea,
    ProductIngredients,
    ProductPrice,
    ProductName,
    ProductInfoArea,
    ProductPhoto,
    ProductPhotoArea} 
from './ProductItem-styled';



function ProductItem({data}) {
    return(
        <Container >
           <ProductPhotoArea>
                <ProductPhoto src={data.image}></ProductPhoto>
           </ProductPhotoArea>
           <ProductInfoArea>
                <ProductName>{data.name}</ProductName> 
                <ProductPrice>R${data.price}</ProductPrice>
                <ProductIngredients>{data.ingredients}</ProductIngredients>
           </ProductInfoArea>
           <ProductButtonArea>
                <ProductButton src="/assests/next.png" />
           </ProductButtonArea>
        </Container>
    )
}

export default ProductItem;