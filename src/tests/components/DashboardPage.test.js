import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/DashboardPage';

test('should render DashboardPage', () => {
    const wrapper = shallow(<DashboardPage></DashboardPage>)
    expect(wrapper).toMatchSnapshot();
});
