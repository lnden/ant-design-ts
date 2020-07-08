/**
 * 高阶组件就是一个函数， 接受一个组件作为参数， 返回一个新的组件
 */

import React, { Component, ComponentType } from "react";
import axios from "axios";

interface ILoaderState {
    data: any;
    isLoading: boolean;
}

interface ILoaderProps {
    data: any;
}

// 传入老的组件WrappedComponent
const withLoader = <P extends ILoaderState>(
    WrappedComponent: ComponentType<P>,
    url: string
) => {
    return class LoaderComponent extends Component<
        Partial<ILoaderProps>,
        ILoaderState
        > {
        constructor(props: any) {
            super(props);
            this.state = {
                data: null,
                isLoading: false,
            };
        }

        componentDidMount() {
            this.setState({
                isLoading: true,
            });
            axios.get(url).then((result: any) => {
                this.setState({
                    data: result.data,
                    isLoading: false,
                });
            });
        }

        render() {
            const { data, isLoading } = this.state;
            return (
                <>
                    {isLoading || !data ? (
                        <p>data is loading</p>
                    ) : (
                            // 返回一个新的组件 多了一些属性
                            <WrappedComponent {...(this.props as P)} data={data} />
                        )}
                </>
            );
        }
    };
};

export default withLoader;
