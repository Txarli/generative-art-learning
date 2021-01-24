import * as React from 'react';
import { useEffect } from 'react';
import P5 from 'p5';

export function useP5Sketch(sketch: (p5: P5) => void) {
  const ref = React.useRef<HTMLDivElement>();

  useEffect(() => {
    const p5 = new P5(sketch, ref.current);
    return p5.remove;
  }, []);

  return ref;
}
