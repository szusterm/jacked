import styled from 'styled-components';
import React from 'react';

interface Props {
    className?: string;
    src?: string;
}

function ProductImage({src, ...restProps}: Props) {
    const SRC_PREFIX = '//';

    return (
        <img
            {...restProps}
            src={SRC_PREFIX + src}
        />
    );
}

const StyledProductImage = styled(ProductImage)`
    width: 200px;
    height: 200px;

    border-radius: 10px;
`;

export default StyledProductImage;
