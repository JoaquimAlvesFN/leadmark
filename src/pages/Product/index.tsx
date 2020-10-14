import React from 'react';
import { Text } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

import Header from '../../components/Header';

import { 
    Container, 
    PhotoImg, 
    HeaderProduct, 
    InfoContact, 
    BuyButton, 
    TextBuyButton, 
    TextHeaderProduct, 
    TextInfoContact 
} from './styles';

interface ProductDTO {
    Product: {
        name_product: string;
        tipo_descricao: string;
        num_telefone: string;
        cpf_cnpj: string;
        ds_produto: string;
        vidas: number;
    };
};

const Product: React.FC = () => {
    const route = useRoute<RouteProp<ProductDTO, 'Product'>>();

  return (
      <Container>
          <Header />
            <PhotoImg source={null} />
            <Text>{route.params.name_product}</Text>
            <Text>2 min</Text>
            <HeaderProduct>
                <TextHeaderProduct>{route.params.tipo_descricao}</TextHeaderProduct>
                <TextHeaderProduct>{route.params.vidas} vidas</TextHeaderProduct>
                <TextHeaderProduct>CNPJ</TextHeaderProduct>
            </HeaderProduct>
            <InfoContact>
                <TextInfoContact>Informações do Contato</TextInfoContact>
                <Text>{route.params.num_telefone}</Text>
                <Text>{route.params.cpf_cnpj}</Text>
                <Text>{route.params.ds_produto}</Text>
            </InfoContact>
            <BuyButton>
                <TextBuyButton>Comprar</TextBuyButton>
            </BuyButton>
      </Container>
  );
}

export default Product;