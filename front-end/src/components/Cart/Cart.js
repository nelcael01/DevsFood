import React from 'react';
import {CartArea,CartHeader,CartIcon,CartText,CartBody} from'./Cart-styled';

function Cart() {
    return(
        <CartArea>
            <CartHeader>
                <CartIcon src='/assests/cart.png'></CartIcon>
                <CartText>Meu carrinho (x)</CartText>
            </CartHeader>
            <CartBody>

            </CartBody>
        </CartArea>

    )
}

export default Cart;