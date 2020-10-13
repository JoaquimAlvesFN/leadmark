import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Input, Button, Link, Logo, TextLink, TextButton, Footer } from './styles';

import logoImage from '../../assets/logo.png';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Home');
    }

    return (
        <>
        <StatusBar backgroundColor="#2c2c2c" barStyle="light-content"/>
        <Container>
            <Logo source={logoImage} resizeMode="center" />
            <View>
                <Input 
                    placeholder="Email" 
                    value={email} 
                    onChangeText={(text) => {
                        setEmail(text)
                    }} 
                />
                <Input 
                    secureTextEntry 
                    placeholder="Senha" 
                    value={password} 
                    onChangeText={(text) => {
                        setPassword(text)
                    }} 
                />
                <Button onPress={handleLogin}>
                    <TextButton>Entrar</TextButton>
                </Button>
            </View>
            <Footer>
                <Link>
                    <TextLink>CRIAR CONTA</TextLink>
                </Link>
                <Text>   </Text>
                <Link>
                    <TextLink>ESQUECI MINHA SENHA</TextLink>
                </Link>
            </Footer>
        </Container>
        </>
    );
}

export default Login;