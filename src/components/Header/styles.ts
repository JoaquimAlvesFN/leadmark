import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const widthDimension = Dimensions.get('window').width;

export const Container = styled.View({
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    alignSelf: 'stretch', 
    justifyContent: 'space-between', 
    padding: 10, 
    height: 100,
});

export const LogoImg = styled.Image({
    height: 30,
    width: widthDimension / 3
});