import React from 'react';
import { sketch } from './CirclePacking.sketch';
import { useP5Sketch } from '../useP5Sketch';

export const CirclePacking: React.FC = () => {
  const ref = useP5Sketch(sketch);

  return <div ref={ref}></div>;
};
