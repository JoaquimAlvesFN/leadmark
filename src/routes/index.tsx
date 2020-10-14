import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Product from '../pages/Product';

const {Navigator, Screen} = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false
            }}>
                <Screen 
                    name="Login" 
                    component={Login} 
                />
                <Screen 
                    name="Home" 
                    component={Home} 
                />
                <Screen 
                    name="Product" 
                    component={Product} 
                />
            </Navigator>
        </NavigationContainer>
    );
}

export default App;