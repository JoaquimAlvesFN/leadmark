import React from 'react';
import { View, Text } from 'react-native';

import { Container, LogoImg } from './styles';

import logoImage from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
        <View>
          <LogoImg source={logoImage} resizeMode="center" />
        </View>
        <View>
          <Text>Teste</Text>
        </View>
    </Container>
  );
}

export default Header;