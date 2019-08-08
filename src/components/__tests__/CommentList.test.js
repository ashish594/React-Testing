import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentList from "../CommentList";

let wrapper;

beforeEach(() => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    };
    wrapper = mount(
        <Root initialState={initialState}>
            <CommentList/>
        </Root>)
});

it('should create a LI per comment', () => {
    expect(wrapper.find('li').length).toEqual(2);
});

