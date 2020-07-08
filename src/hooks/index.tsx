import React, { useState } from "react";
import IShowResult, { IThemeProps } from "./type";

import { LikeButton4 } from "./LikeButton";
import MouseTracker from "./MouseTracker";
import useMousePosition from "./useMousePosition";
import withLoader from "./HigherOrderComponent";
import useURLLoader from "./useURLLoader";
import { UseRefDomNode } from "./useRef";
import CustomUseContext from "./useContext";

import "./index.css";

const LikeButton = () => {
    return (
        <>
            <h3>1. LikeButton</h3>
            <LikeButton4 />
        </>
    );
};

const WrapMouseTracker = () => {
    const [show, setShow] = useState(true);
    return (
        <>
            <h3>2. MouseTracker</h3>
            <button onClick={() => setShow(!show)}>Toggle tracker</button>
            {show && <MouseTracker />}
        </>
    );
};

const CustomMousePositionHook = () => {
    const positions = useMousePosition();
    return (
        <>
            <h3>3. 自定义Simple Hook</h3>
            <p>
                X: {positions.x}, Y: {positions.y}
            </p>
        </>
    );
};

const DogShow: React.FC<{ data: IShowResult }> = ({ data }) => {
    return (
        <>
            <h3>Dog show: {data.status}</h3>
            <img src={data.message} alt="dog" />
        </>
    );
};
const HigherOrderComponent = () => {
    const WrappedDogShow = withLoader(
        DogShow,
        "https://dog.ceo/api/breeds/image/random"
    );
    return (
        <>
            <h3>4. 高阶组件HOC</h3>
            <WrappedDogShow />
        </>
    );
};

const CustomURLLoaderHook = () => {
    const [show, setShow] = useState(true);
    const [
        data,
        loading,
    ] = useURLLoader("https://dog.ceo/api/breeds/image/random", [show]);
    const dogResult = data as IShowResult;
    return (
        <>
            <h3>5. 自定义Hook</h3>
            <button onClick={() => setShow(!show)}>Refresh dog photo</button>
            {loading ? (
                <p>读取中···</p>
            ) : (
                    <img src={dogResult && dogResult.message} alt="dog" />
                )}
        </>
    );
};

const UseRefDemo = () => {
    return (
        <>
            <h3>6. useRef Hook</h3>
            <UseRefDomNode />
        </>
    );
};

const UseContextDemo = () => {
    return (
        <>
            <h3>7. useContext Hook</h3>
            <CustomUseContext />
        </>
    );
};

export const themes: IThemeProps = {
    light: {
        color: "#f09",
        background: "#090",
    },
    dark: {
        color: "#f00",
        background: "#099",
    },
};
export const ThemeContext = React.createContext(themes.light);
const ListHooks = () => {
    const [theme, setTheme] = useState(themes.light);
    return (
        <div className="container">
            <ThemeContext.Provider value={theme}>
                <button
                    onClick={() =>
                        setTheme(
                            theme === themes.light ? themes.dark : themes.light
                        )
                    }
                >
                    切换主题
                </button>
                <LikeButton />
                <WrapMouseTracker />
                <CustomMousePositionHook />
                <HigherOrderComponent />
                <CustomURLLoaderHook />
                <UseRefDemo />
                <UseContextDemo />
            </ThemeContext.Provider>
        </div>
    );
};
export default ListHooks;
