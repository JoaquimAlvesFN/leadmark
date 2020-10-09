import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';

const {Navigator, Screen} = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen 
                    name="Login" 
                    component={Login} 
                    options={{
                        headerShown: false
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}

export default App;