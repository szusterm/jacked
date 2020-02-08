import {Currency} from '../../../../../shared/scrapper';
import ProductImage from './ProductImage';
import ProductName from './ProductName';
import styled from 'styled-components';
import React from 'react';

interface Props {
    className?: string;
    name: string;
    image: string;
    price: number;
    currency: Currency;
}

function ProductInfo({name, image, className}: Props) {
    return (
        <div className={className}>
            <ProductImage src={image}/>
            <ProductName name={name}/>
        </div>
    );
}

const StyledProductInfo = styled(ProductInfo)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 5px;
`;

export default StyledProductInfo;
