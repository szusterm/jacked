import styled from 'styled-components';
import React from 'react';

interface Props {
    className?: string;
}

function App({className}: Props) {
    return (
        <div className={className}>
            Jacked
        </div>
    );
}

const StyledApp = styled(App)`
    width: 300px;
    height: 500px;
`;

export default StyledApp;
