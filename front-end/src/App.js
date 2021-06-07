import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import MenuItem from './components/MenuItem/MenuItem';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';
import {Container,Menu,PageBody} from './AppStyled'
import PrivateRoute from './components/PrivateRoute'

export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <img src="" alt="" />
                    <MenuItem icon='/assests/store.png' link='/'/>
                    <MenuItem icon='/assests/order.png' link='/orders'/>
                    <MenuItem icon='/assests/profile.png' link='/profile'/>
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
            </Container>
            <h1>Oi, {name}</h1>

        </BrowserRouter>
    );
}