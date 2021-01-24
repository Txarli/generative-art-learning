import React from 'react';
import { useP5Sketch } from '../useP5Sketch';
import { sketch } from './CubicDisarray.sketch';

export const CubicDisarray: React.FC = () => {
  const ref = useP5Sketch(sketch);

  return <div ref={ref}></div>;
};
