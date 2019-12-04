import * as React from 'react';
import { LoaderWrapper } from './';

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
