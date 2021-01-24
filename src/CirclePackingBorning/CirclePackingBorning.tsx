import * as React from 'react';
import { useEffect } from 'react';
import { sketch } from './CirclePackingBorning.sketch';
import P5 from 'p5';

export const CirclePackingBorning: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>();

  useEffect(() => {
    new P5(sketch, ref.current);
  }, []);

  return <div ref={ref}></div>;
};
