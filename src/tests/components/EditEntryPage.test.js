import React from 'react';
import { shallow } from 'enzyme';
import entries from '../fixtures/entries';
import { EditEntryPage } from '../../components/EditEntryPage';

let startEditEntry, startRemoveEntry, history;
beforeEach(() => {
    /* Q: Why is beforeEach required instead of just defining the variables once? */
    startEditEntry = jest.fn();
    startRemoveEntry = jest.fn();
    history = { push: jest.fn() };
});

test('should render EditEntryPage component with the appropriate entry', () => {
    let wrapper = shallow(<EditEntryPage entry={entries[0]}></EditEntryPage>);
    expect(wrapper).toMatchSnapshot();
    wrapper = shallow(<EditEntryPage entry={entries[1]}></EditEntryPage>);
    expect(wrapper).toMatchSnapshot();
    wrapper = shallow(<EditEntryPage entry={entries[2]}></EditEntryPage>);
    expect(wrapper).toMatchSnapshot();
});

test('should handle EditEntry', () => {
    const wrapper = shallow(<EditEntryPage entry={entries[1]}
        startEditEntry={startEditEntry}
        startRemoveEntry={startRemoveEntry}
        history={history}
    ></EditEntryPage>);
    wrapper.find('EntryForm').prop('onSubmit')(entries[1]);
    expect(startEditEntry).toHaveBeenCalledWith(entries[1].id, entries[1]);
    /* The difference between toHaveBeenLastCalledWith and toHaveBeenCalledWith:   
    From my understanding, toHaveBeenCalledWith checks if the argument was called with
    history.push at all. For example, let's say you have a applyToAllFlavors(f) function
    that applies f to a bunch of flavors, and you want to ensure that the function was applied to 'apple'.
    The test case would still pass with toHaveBeenCalledWith, even if the last operation was applied to 'mango'. */
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle RemoveEntry', () => {
    const wrapper = shallow(<EditEntryPage entry={entries[1]}
        startEditEntry={startEditEntry}
        startRemoveEntry={startRemoveEntry}
        history={history}
    ></EditEntryPage>);
    wrapper.find('button').simulate('click');
    expect(startRemoveEntry).toHaveBeenCalledWith({ id: entries[1].id });
    expect(history.push).toHaveBeenLastCalledWith('/');
});