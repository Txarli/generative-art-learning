import { useEffect, useRef } from 'react';
import P5 from 'p5';

export function useP5Sketch(sketch: (p5: P5) => void) {
  const ref = useRef();

  useEffect(() => {
    const p5 = new P5(sketch, ref.current);
    return p5.remove;
  }, []);

  return ref;
}
