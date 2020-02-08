import {Currency} from '../../../shared/scrapper';
import ProductInfo from './pages/ProductInfo';
import styled from 'styled-components';
import React from 'react';

interface Props {
    className?: string;
}

function App({className}: Props) {
    const PRODUCT = {
        name: 'Sweet T-shirt',
        image: 'cdn.shopify.com/s/files/1/0877/4244/products/sports_bra_front_classic_Store_photo_1024x1024.png?v=1554859388',
        price: 40,
        currency: Currency.USD
    };

    return (
        <div className={className}>
            <ProductInfo {...PRODUCT}/>
        </div>
    );
}

const StyledApp = styled(App)`
    width: 300px;
    height: 500px;
`;

export default StyledApp;
