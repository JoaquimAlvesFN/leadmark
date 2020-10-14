import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const widthDimension = Dimensions.get('window').width;

export const Header = styled.View({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100
});

export const Container = styled.View({
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD'
});

export const Card = styled.TouchableOpacity({
    flexDirection: 'row',
    alignItems: 'center',
    width: widthDimension - 50,
    height: 150,
    backgroundColor: '#FFF',
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
});

export const Image = styled.Image({
    backgroundColor: '#DDD',
    borderRadius: 50,
    width: 100,
    height: 100,
});

export const Info = styled.View({
    marginLeft: 15
});

export const ProductName = styled.Text({
    fontWeight: 'bold',
    fontSize: 16
});

export const FooterInfo = styled.Text({
    fontSize: 11
});

export const PriceInfo = styled.Text({
    marginBottom: 10
});