import React from 'react';
import { sketch } from './UnDeuxTroisRotating.sketch';
import { useP5Sketch } from '../useP5Sketch';

export const UnDeuxTroisRotating: React.FC = () => {
  const ref = useP5Sketch(sketch);

  return <div ref={ref}></div>;
};
