import React, { useState, useEffect, useRef } from 'react';

const UseRef = () => {
    const [like, setLike] = useState(0);

    useEffect(() => {
        console.log(`document title effect is running`);
        document.title = `点击了${like}次`;
    });

    function handleAlertClick() {
        setTimeout(() => {
            alert(`you clicked on ` + like) // 输出当时点击时的值
        }, 3000)
    }

    return (
        <>
            <button onClick={() => {
                setLike(like + 1)
            }}>{like} 点赞
            </button>
            <button onClick={handleAlertClick}>Alert!</button>
        </>
    )
};

/**
 * 案例一
 * 在任意一次渲染中 props、state 都是保持不变的
 * useRef 返回 current: T
 * 修改ref的值不会引发组件的render，本实例是接触like来重新渲染render
 */
const UseRefCurrent = () => {
    const [like, setLike] = useState(0);
    const likeRef = useRef(0);

    useEffect(() => {
        console.log(`document title effect is running`);
        document.title = `点击了${like}次`;
    });

    function handleAlertClick() {
        setTimeout(() => {
            alert(`you clicked on ` + likeRef.current)
        }, 3000)
    }

    return (
        <>
            <button onClick={() => {
                setLike(like + 1);
                likeRef.current++
            }}>{like} 点赞
            </button>
            <button onClick={handleAlertClick}>Alert!</button>
        </>
    )
};

/**
 * 案例二
 * 使用 hook 组件 要弱化 生命周期的概念
 * 区分组件首次加载
 */
const UseRefFirstRender = () => {
    const [like, setLike] = useState(0);
    const didMountRef = useRef(false);

    useEffect(() => {
        console.log(`document title effect is running`);
        document.title = `点击了${like}次`;
    }, [like]);

    useEffect(() => {
        if (didMountRef.current) {
            console.log(`this is updated`);
        } else {
            console.log(`this first render`);
            didMountRef.current = true;
        }
    });
    return (
        <>
            <button onClick={() => {
                setLike(like + 1);
            }}>{like} 点赞
            </button>
        </>
    )
};

/**
 * 案例三
 * 使用 ref 访问 DOM 节点
 */
const UseRefDomNode = () => {
    const domRef = useRef<HTMLInputElement>(null);

    const onButtonClick = () => {
        // `current` 指向已挂载到 DOM 上的文本输入元素
        if (domRef && domRef.current) {
            domRef.current.focus();
        }
    };
    return (
        <>
            <input type="text" ref={domRef} />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    )
};

export {
    UseRef,
    UseRefCurrent,
    UseRefFirstRender,
    UseRefDomNode,
};
