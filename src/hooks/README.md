### Description

这是一个 React Hook 入门级文件描述，由最基础的 useState、useEffect、useRef、useContext 使用，约定式封装 useHooks，React HOC 高阶组件对比 React Hook

> 只在最顶层使用 Hook

> 只在 React 函数中调用 Hook

#### LikeButton

测试 LikeButton 组件

-   需修改当前路径下 index.tsx 切换 LikeButton [0~4]

```javascript
import { LikeButton [0~4] } from './LikeButton';
const LikeButton = () => {
    return (
        <>
            <h3>1. LikeButton</h3>
            <LikeButton[0~4] />
        </>
    )
};

```

#### MouseTracker

-   useEffect 接受两个参数， 第一个参数是一个函数， 第二参数是一个是否可执行的变量[]
-   useEffect 返回值可以是一个 void 或者一个 function

```javascript
const MouseTracker = () => {
    useEffect(() => {
        console.log("每次render都会执行，相关于componentUpdate生命周期");
        return () => {
            console.log("可以这里检测组件销毁事件，removeEventListener");
        };
    }, []); // 空数组会表示执行一次
};
```

#### useMousePosition

自定义 hook

-   1.命名必须以 use 开头约定命名
-   2.相同的 hook 不会共享 state

#### withLoader

高阶组件就是一个函数， 接受一个组件作为参数， 返回一个新的组件

```javascript
// 创建高阶组件
const withLoader = (WrappedComponent, url) => {
    return class LoaderComponent extends Component {
        render() {
            return (
                <WrappedComponent {...this.props} data={this.state.data} /> // 返回一个新的组件 多了一些属性
            );
        }
    };
};

export default withLoader;

// 使用高阶组件
const DogShow = ({ data }) => {
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
    return <WrappedDogShow />;
};
```

#### useURLLoader

使用 hook 代替高阶组件来实现功能，简洁，可读性强

#### useRef

useRef 返回值 current

#### useContext

```javascript
// 顶层组件
export const themes = {
    'light': {
        color: '#f09',
        background: '#090'
    },
    'dark': {
        color: '#f00',
        background: '#099'
    }
};
export const ThemeContext = React.createContext(themes.light);

<ThemeContext.Provider value={themes.light}>
<ThemeContext.Provider/>
// 使用组件
const theme = useContext(ThemeContext);
```
