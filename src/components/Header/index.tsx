import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, LogoImg } from './styles';

import logoImage from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
        <View>
          <LogoImg source={logoImage} resizeMode="center" />
        </View>
        <View>
          <Icon name="bars" size={30} />
        </View>
    </Container>
  );
}

export default Header;