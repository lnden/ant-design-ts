import React, { useState, useEffect } from 'react';
import useMousePosition from '../hooks/useMousePosition'

/**
 * 对象方式创建 useState hook
 */
const LikeButton0: React.FunctionComponent = () => {
    const [obj, setObj] = useState({ like: 0, on: true });
    return (
        <>
            {/* 合并不是替换，所以不改变的值也要写上{on: obj.on} */}
            <button onClick={() => setObj({ like: obj.like + 1, on: obj.on })}>{obj.like}点赞</button>
            <button onClick={() => setObj({ like: obj.like, on: !obj.on })}>{obj.on ? 'ON' : 'OFF'}</button>
        </>
    )
};

/**
 * 拆分 useState hook 单独处理
 */
const LikeButton1: React.FC = () => {
    const [like, setLike] = useState(0);
    const [on, setOn] = useState(true);
    return (
        <>
            <button onClick={() => setLike(like + 1)}>{like}点赞</button>
            <button onClick={() => setOn(!on)}>{on ? 'ON' : 'OFF'}</button>
        </>
    )
};

/**
 * 使用 useEffect 控制状态更新修改title
 */
const LikeButton2: React.FC = () => {
    const [like, setLike] = useState(0);
    const [on, setOn] = useState(true);
    useEffect(() => {
        console.log('like未更新，effect执行了~');
        document.title = `您已经拍了${like}次数`;
    });
    return (
        <>
            <button onClick={() => setLike(like + 1)}>{like}点赞</button>
            <button onClick={() => setOn(!on)}>{on ? 'ON' : 'OFF'}</button>
        </>
    )
};

/**
 * 使用 useEffect 设置第二个参数控制条件更新
 * 只有 like 改变的时候 effect 才会执行, 第二个参数可以是数组 [like, on]
 */
const LikeButton3: React.FC = () => {
    const [like, setLike] = useState(0);
    const [on, setOn] = useState(true);
    useEffect(() => {
        console.log('like更新，effect执行了~');
        document.title = `您已经拍了${like}次数`;
    }, [like]);
    return (
        <>
            <button onClick={() => setLike(like + 1)}>{like}点赞</button>
            <button onClick={() => setOn(!on)}>{on ? 'ON' : 'OFF'}</button>
        </>
    )
};


/**
 * 相同的 hook 不会共享 state，与 ./index 下 MousePositionHook 同时使用
 */
const LikeButton4: React.FC = () => {
    const [like, setLike] = useState(0);
    const [on, setOn] = useState(true);
    const positions = useMousePosition();
    useEffect(() => {
        console.log('主要演示 useMousePosition 自定义 hook');
        document.title = `您已经拍了${like}次数`;
    }, [like]);
    return (
        <>
            <p>X: {positions.x}, Y: {positions.y}</p>
            <button onClick={() => setLike(like + 1)}>{like}点赞</button>
            <button onClick={() => setOn(!on)}>{on ? 'ON' : 'OFF'}</button>
        </>
    )
};

export {
    LikeButton0,
    LikeButton1,
    LikeButton2,
    LikeButton3,
    LikeButton4,
};
