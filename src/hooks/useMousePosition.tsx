import { useState, useEffect } from 'react';

const useMousePosition = () => {
    const [positions, setPositions] = useState({ x: 0, y: 0 });
    useEffect(() => {
        console.log('add effct', positions.x);
        const updateMouse = (e: MouseEvent) => {
            setPositions({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener('mousemove', updateMouse);
        return () => {
            console.log('remove effect', positions.x);
            document.removeEventListener('mousemove', updateMouse)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return positions;
};

export default useMousePosition;

/**
 * 1.命名必须以use开头约定命名
 * 2.相同的hook不会共享state
 * */
