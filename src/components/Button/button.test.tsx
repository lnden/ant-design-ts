import React from 'react'
import { render } from '@testing-library/react';
import Button from './button'

// test('our first react test case', () => {
//     const wrapper = render(<Button>Nice</Button>)
//     const element = wrapper.queryByText('Nice');
//     expect(element).toBeTruthy();
//     expect(element).toBeInTheDocument()
// })

describe('test Button component', () => {
    test('should render the correct default button', () => {
        const wrapper = render(<Button>Nice</Button>)
        const element = wrapper.getByText('Nice');
        expect(element).toBeInTheDocument(); // 是否加载到dom上
        expect(element.tagName).toEqual('BUTTON'); // 是否是button标签
        expect(element).toHaveClass('btn btn-default'); // 是否含有btn btn-default类
    })

    test('should render the correct component based on different props', () => {

    })

    test('should render a link when btnType equals link and href is provided', () => {

    })

    test('should render disabled button when disabled set to true', () => {

    })
})
