import React from 'react';
import { View, Text, FlatList, ListRenderItem } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Card, Image, Info, ProductName, FooterInfo, PriceInfo } from './styles';
import Header from '../../components/Header';

import {leads} from '../../data/list.json';

interface LeadDTO {
    id: number;
    id_produto: number;
    ds_produto: string;
    valor_compra: string;
    tipo_descricao: string;
    nu_ddd: string;
    localidade: string;
    num_telefone: string;
    nome: string;
    cpf_cnpj: string | "sem registro";
    vidas: number;
}

const Home: React.FC = () => {
    const {navigate} = useNavigation();

    const renderItem: ListRenderItem<LeadDTO> = ({ item }) => (
        <Card onPress={() => {
                navigate({
                    name: 'Product',
                    params: {
                        name_product: item.nome,
                        num_telefone: item.num_telefone,
                        ds_produto: item.ds_produto,
                        cpf_cnpj: item.cpf_cnpj,
                        tipo_descricao: item.tipo_descricao,
                        vidas: item.vidas,
                    }
                })
            }}
        >
            <Image source={null}/>
            <Info>
                <ProductName>{item.ds_produto}</ProductName>
                <PriceInfo>R$ {item.valor_compra}</PriceInfo>
                <View>
                    <Text>{item.tipo_descricao}</Text>
                    <FooterInfo>DDD {item.nu_ddd} - {item.localidade}</FooterInfo>
                </View>
            </Info>
        </Card>
    );

    return (
        <Container>
            <Header />
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                data={leads}
            />
        </Container>
    );
}

export default Home;