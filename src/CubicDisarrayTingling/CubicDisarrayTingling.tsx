import * as React from 'react';
import { sketch } from './CubicDisarrayTingling.sketch';
import { useP5Sketch } from '../useP5Sketch';

export const CubicDisarrayTingling: React.FC = () => {
  const ref = useP5Sketch(sketch);

  return <div ref={ref}></div>;
};
