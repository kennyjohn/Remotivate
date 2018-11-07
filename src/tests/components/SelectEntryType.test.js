import React from 'react';
import { shallow } from 'enzyme';
import { SelectEntryType } from '../../components/SelectEntryType';
import ReactModal from 'react-modal';

let startAddEntry;
beforeEach(() => {
    startAddEntry = jest.fn();
});

test('should open ReactModal modal', () => {
    let wrapper = shallow(<SelectEntryType
        startAddEntry={startAddEntry}
    ></SelectEntryType>);
    expect(wrapper.find(ReactModal).length).toEqual(1);
    /* A way to test is to use debug() - wrapper.find('button').debug());
    This simulates the click, so the isOpen prop has to be true for the test case to pass
    console.log(wrapper.find(ReactModal).prop('isOpen'), "before the simulation"); */
    wrapper.find('button').at(0).simulate('click', {
        target: "text"
    });
    // console.log(wrapper.find(ReactModal).prop('isOpen'), "after the simulation");
    expect(wrapper.find(ReactModal).prop('isOpen')).toEqual(true);
});