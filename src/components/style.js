import styled from 'styled-components';

export const ButtonTag = styled.button`
  background-color: ${props => props.primary ? 'rgb(1,89,162)' : 'white'};
  padding: 10px 15px;
  color: ${props => props.primary ? 'white' : 'rgb(33,33,33)'};;
  border: 0;
  border-radius: 2px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  outline: none;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10,10);
    opacity: 0;
    transition: transform .5s, opacity 1s;
  }

  &:active:after {
    transform: scale(0,0);
    opacity: .2;
    transition: 0s;
  }
`;
