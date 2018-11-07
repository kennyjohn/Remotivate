import React from 'react';
import { shallow } from 'enzyme';
import entries from '../fixtures/entries';
import { EntryList } from '../../components/EntryList';

/* https://stackoverflow.com/questions/36211739/invariant-violation-could-not-find-store-in-either-the-context-or-props-of-c
It is necessary to export EntryList as a named export because 
this allows us to test the shallow, unconnected component. If this is not included,
we would be required to connect to the redux store. */

test('should render EntryList component', () => {
    const wrapper = shallow(<EntryList entries={entries}></EntryList>)
    expect(wrapper).toMatchSnapshot();
});

test('should render EntryList with empty message', () => {
    const wrapper = shallow(<EntryList entries={[]}></EntryList>)
    expect(wrapper).toMatchSnapshot();
});