import styled from 'styled-components';
import React from 'react';

interface Props {
    className?: string;
    name?: string;
}

function ProductName({className, name}: Props) {
    const DEFAULT_NAME = 'Undefined';

    return (
        <div className={className}>
            {name ? name : DEFAULT_NAME}
        </div>
    );
}

const StyledProductName = styled(ProductName)`
    font-size: 20px;
`;

export default StyledProductName;
