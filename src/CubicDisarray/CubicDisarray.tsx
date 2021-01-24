import * as React from 'react';
import { useEffect } from 'react';
import { sketch } from './CubicDisarray.sketch';
import P5 from 'p5';

export const CubicDisarray: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>();

  useEffect(() => {
    const p5 = new P5(sketch, ref.current);

    () => {
      p5.remove();
    };
  }, []);

  return <div ref={ref}></div>;
};
