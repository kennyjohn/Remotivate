import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';
// We have shallow rendering and Full DOM rendering
// - full rendering renders child components of a component as well

let startLogout, wrapper;
beforeEach(() => {
    startLogout = jest.fn();
    wrapper = shallow(<Header startLogout={startLogout}></Header>);
});

test('should render Header', () => {
    // const renderer = new ReactShallowRenderer();
    // we're going to use snapshots instead, which detects changes over time
    expect(wrapper).toMatchSnapshot();
});

// should call startLogout on button click
test('should call startLogout on button click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
 
