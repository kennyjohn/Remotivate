import React from 'react';
import { shallow } from 'enzyme';
import FAQs from '../../components/FAQs';

let wrapper;
beforeEach(() => {
    wrapper = shallow(<FAQs></FAQs>);
});

test('should render FAQs', () => {
    expect(wrapper).toMatchSnapshot();
})