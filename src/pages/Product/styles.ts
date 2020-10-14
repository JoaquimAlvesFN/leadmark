import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View({
    flex: 1, 
    display: 'flex', 
    alignItems: 'center', 
    backgroundColor: '#DDD'
});

export const PhotoImg = styled.Image({
    backgroundColor: '#FFF', 
    borderRadius: 50, 
    width: 100, 
    height: 100, 
    marginBottom: 20
});

export const HeaderProduct = styled.View({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', 
    alignSelf: 'stretch', 
    justifyContent: 'space-between',
    padding: 30,
    marginVertical: 30
});

export const TextHeaderProduct = styled.Text({
    backgroundColor: '#FFF', 
    paddingHorizontal: 10, 
    borderRadius: 5
});

export const InfoContact = styled.View({
    backgroundColor: '#FFF', 
    padding: 10, 
    width: Dimensions.get('window').width - 50, 
    height: 180
});

export const TextInfoContact = styled.Text({
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 10
});

export const BuyButton = styled.TouchableOpacity({
    alignItems: 'center', 
    backgroundColor: 'green', 
    width: Dimensions.get('window').width - 50, 
    padding: 15
});

export const TextBuyButton = styled.Text({
    color: '#FFF', 
    fontWeight: 'bold'
});