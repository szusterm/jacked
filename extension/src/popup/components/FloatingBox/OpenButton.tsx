import styled from 'styled-components';

const SIZE = '50px';

const OpenButton = styled.button`
  width: ${SIZE};
  height: ${SIZE};

  position: absolute;
  left: -${SIZE};
  top: 100px;


  background: #fc4a1a;
  background: linear-gradient(45deg, #f7b733, #fc4a1a);


  border-width: 0;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;

  cursor: pointer;

  transition: 100ms;
  transition-property: filter;

  &:hover {
    filter: grayscale(0.15);
  }
`;

export default OpenButton;
