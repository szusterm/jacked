import styled from 'styled-components';
import React, {ReactNode} from 'react';
import OpenButton from './OpenButton';

interface Props {
    className?: string;
    hidden?: boolean;
    onClickOpen?: () => void;
    children?: ReactNode;
}

function FloatingBox(props: Props) {
    const {children, className, onClickOpen} = props;

    return (
        <div className={className}>
            <OpenButton onClick={onClickOpen}/>
            {children}
        </div>
    );
}

const StyledFloatingBox = styled(FloatingBox)`
  width: 300px;
  height: 500px;

  z-index: 9999;
  position: fixed;
  top: 10px;
  right: 10px;

  display: flex;
  justify-content: center;
  align-content: center;

  background: white;
  border-radius: 10px;

  transition-duration: 100ms;
  transition-property: transform;
  transition-timing-function: ease-in-out;

  transform: translateX(${
    ({hidden}: Props) => hidden ? '310px' : '0'}
  );
`;

export default StyledFloatingBox;
