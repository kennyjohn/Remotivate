import React from 'react';
import { shallow } from 'enzyme';
import spotlights from '../fixtures/spotlights';
import { Spotlight } from '../../components/Spotlight';

test('should render Spotlight component', () => {
    const wrapper = shallow(<Spotlight spotlight={spotlights[0]}></Spotlight>);
    expect(wrapper).toMatchSnapshot();
});