import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapper;

beforeEach(() => {
    wrapper = mount(<Root>
        <CommentBox/>
    </Root>);
});

afterEach(() => {
    wrapper.unmount();
});

it('comment box should have a textbox and a button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(2);

});

describe('text area', () => {

    beforeEach(() => {
        wrapper.find('textarea').simulate('change', {
            target: {value: 'new comment'}
        });

        wrapper.update(); // force re-render the component
    });

    it('text area should have a input value', () => {
        expect(wrapper.find('textarea').prop('value')).toEqual('new comment');

    });


    it('text area should empty on submit click', () => {
        wrapper.find('form').simulate('submit', {
            target: {value: ''}
        });
        wrapper.update();

        expect(wrapper.find('textarea').prop('value')).toEqual('');

    });

});