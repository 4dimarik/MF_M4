import { useRef, useState, useEffect } from 'react';

function useHover() {
  const ref = useRef();
  const [hovered, setHovered] = useState();

  useEffect(() => {
    if (ref.current instanceof HTMLElement) {
      ref.current.addEventListener('mouseover', (e) => {
        console.dir(e.currentTarget);
        setHovered(e.currentTarget.matches(':hover'));
      });

      ref.current.addEventListener('mouseleave', (e) => {
        setHovered(e.currentTarget.matches(':hover'));
      });
    }
  }, [ref]);

  return { hovered, ref };
}

export { useHover };
