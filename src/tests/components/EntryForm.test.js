import React from 'react';
import { shallow } from 'enzyme';
import entries from '../fixtures/entries';
import EntryForm from '../../components/EntryForm';

test('should render EntryForm', () => {
    const wrapper = shallow(<EntryForm></EntryForm>);
    expect(wrapper).toMatchSnapshot();
});

test('should render EntryForm with entry data', () => {
    const wrapper = shallow(<EntryForm entry={entries[0]}></EntryForm>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid text submission', () => {
    const wrapper = shallow(<EntryForm buttonClicked="text"></EntryForm>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toEqual('Please provide text for your text entry.');
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid image submission', () => {
    const wrapper = shallow(<EntryForm buttonClicked="image"></EntryForm>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toEqual('Please provide a URL for your image entry.');
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid video submission', () => {
    const wrapper = shallow(<EntryForm buttonClicked="video"></EntryForm>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toEqual('Please provide a URL for your video entry.');
    expect(wrapper).toMatchSnapshot();
});

test('should set text on input change', () => {
    const value = 'New text';
    const wrapper = shallow(<EntryForm></EntryForm>);
    wrapper.find('textarea').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('text')).toBe(value);
});

test('should set purpose on input change', () => {
    const value = 'New purpose';
    const wrapper = shallow(<EntryForm></EntryForm>);
    wrapper.find('textarea').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('purpose')).toBe(value);
});

test('should set author on input change', () => {
    const value = 'Jay Shetty';
    const wrapper = shallow(<EntryForm></EntryForm>);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('author')).toBe(value);
});

test('should set video URL on input change', () => {
    const value = 'video.url.com';
    const wrapper = shallow(<EntryForm></EntryForm>);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('video')).toBe(value);
});

test('should set image URL on input change', () => {
    const value = 'image.url.com';
    const wrapper = shallow(<EntryForm></EntryForm>);
    wrapper.find('input').at(2).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('image')).toBe(value);
});

test('should call onSubmit prop for valid video submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<EntryForm
        entry={entries[2]}
        onSubmit={onSubmitSpy}
        ></EntryForm>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        text: entries[2].text,
        author: entries[2].author,
        video: entries[2].video,
        image: entries[2].image,
        createdAt: entries[2].createdAt,
        purpose: entries[2].purpose
    });
});

test('should call onSubmit prop for valid text submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<EntryForm
        entry={entries[0]}
        onSubmit={onSubmitSpy}
        ></EntryForm>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        text: entries[0].text,
        author: entries[0].author,
        video: entries[0].video,
        image: entries[0].image,
        createdAt: entries[0].createdAt,
        purpose: entries[0].purpose
    });
});

test('should call onSubmit prop for valid image submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<EntryForm
        entry={entries[1]}
        onSubmit={onSubmitSpy}
        ></EntryForm>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        text: entries[1].text,
        author: entries[1].author,
        video: entries[1].video,
        image: entries[1].image,
        createdAt: entries[1].createdAt,
        purpose: entries[1].purpose
    });
});