import * as React from 'react';
import { sketch } from './CirclePackingBorning.sketch';
import { useP5Sketch } from '../useP5Sketch';

export const CirclePackingBorning: React.FC = () => {
  const ref = useP5Sketch(sketch);

  return <div ref={ref}></div>;
};
