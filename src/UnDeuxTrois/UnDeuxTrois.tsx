import React from 'react';
import { sketch } from './UnDeuxTrois.sketch';
import { useP5Sketch } from '../useP5Sketch';

export const UnDeuxTrois: React.FC = () => {
  const ref = useP5Sketch(sketch);

  return <div ref={ref}></div>;
};
