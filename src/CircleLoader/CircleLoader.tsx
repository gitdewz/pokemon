import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const LoaderAnimation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100px;
  height: 130px;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -50px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    border: 12px solid rgb(25, 25, 25);
    border-radius: 50%;
    animation: ${LoaderAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: rgb(25, 25, 25) transparent transparent transparent;
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }

  & div:nth-child(2) {
    animation-delay: -0.3s;
  }

  & div:nth-child(3) {
    animation-delay: -0.15s;
  }

  & span {
    position: absolute;
    bottom: 0;
  }
`;

export const CircleLoader: React.FC = () => {
  return (
    <LoaderWrapper>
      <div />
      <div />
      <div />
      <div />
      <span>Loading...</span>
    </LoaderWrapper>
  );
}
