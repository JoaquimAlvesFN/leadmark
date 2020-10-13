import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const widthDimension = Dimensions.get("window").width;

export const Container = styled.View({
    flex: 1,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#2c2c2c',
});

export const Input = styled.TextInput({
    backgroundColor: '#FFF',
    width: widthDimension - 50,
    padding: 15,
    borderRadius: 25,
    marginBottom: 10,
});

export const Button = styled.TouchableOpacity({
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#12866f',
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
    fontWeight: 'bold',
    width: widthDimension - 50,
});

export const TextButton = styled.Text({
    color: '#FFF'
});

export const Link = styled.TouchableOpacity({
    fontWeight: 'bold'
});

export const TextLink = styled.Text({
    color: '#FFF'
})

export const Logo = styled.Image({
    height: 50,
    width: widthDimension - 80
});

export const Footer = styled.View({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
});