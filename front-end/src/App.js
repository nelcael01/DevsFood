import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import MenuItem from './components/MenuItem/MenuItem';

import ReactTooltip from 'react-tooltip';

import PrivateRoute from './components/PrivateRoute'
import HomeScreen from './pages/HomeScreen/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';
import {Container,Menu,PageBody} from './AppStyled'
import Cart from './components/Cart/Cart';

export default () => {
    

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem title='Loja' icon='/assests/store.png' link='/'/>
                    <MenuItem title='Pedidos' icon='/assests/order.png' link='/orders'/>
                    <MenuItem title='Meu Perfil' icon='/assests/profile.png' link='/profile'/>
                </Menu>
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <PrivateRoute path='/orders'>
                            
                        </PrivateRoute>  
                        <PrivateRoute path='/profile'>
                            
                        </PrivateRoute>  
                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>
                </PageBody>
                <Cart />
                {/* para utilizar tem que estar no elemento pai, no caso no app*/}
                <ReactTooltip id='tip-top' place='top' effect='solid'/>
                <ReactTooltip id='tip-right' place='right' effect='solid'/>
            </Container>
            

        </BrowserRouter>
    );
}