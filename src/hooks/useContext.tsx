import React, { useContext } from 'react';
import { ThemeContext } from './index';

const UseContext = () => {
    const theme = useContext(ThemeContext);
    const style = {
        color: theme.color,
        background: theme.background
    };
    return (
        <div style={style}>
            这里是共享顶层的 context
        </div>
    )
};
export default UseContext;
