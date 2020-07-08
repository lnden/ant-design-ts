import React, { useState, useEffect } from 'react';

const MouseTracker: React.FC = () => {
    const [positions, setPositions] = useState({ x: 0, y: 0 });
    useEffect(() => {
        console.log('add effect', positions.x);
        const updateMouse = (e: MouseEvent) => {
            console.log('inner');
            setPositions({ x: e.clientX, y: e.clientY })
        };
        document.addEventListener('click', updateMouse);
        return () => {
            // 不删除事件就不会线性的输出 'inner'
            console.log('remove effect', positions.x);
            document.removeEventListener('click', updateMouse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);  // [] 只执行一次
    console.log('before render', positions.x);
    return (
        <p>X: {positions.x}, Y: {positions.y}</p>
    )
};

export default MouseTracker;
