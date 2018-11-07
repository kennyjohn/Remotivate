import React from 'react';
import { shallow } from 'enzyme';
import entries from '../fixtures/entries';
import EntryListItem from '../../components/EntryListItem';

test('should render EntryListItem component', () => {
    const wrapper = shallow(<EntryListItem
        {...entries[1]}
    ></EntryListItem>)
    expect(wrapper).toMatchSnapshot();
});