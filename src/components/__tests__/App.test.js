import React from 'react';
import App from 'components/App'
import CommentBox from "components/CommentBox";
import { shallow } from 'enzyme';


let wrapper;
beforeEach(() => {
    wrapper = shallow(<App />);
});

it('shows comment box present inside the App', () => {
    // const wrapper = shallow(<App />);
    // expect(wrapper.contains(<CommentBox/>));
    expect(wrapper.find(CommentBox).length).toEqual(1);

});

it('shows comment list present inside the App', () => {
    // const wrapper = shallow(<App />);
    // expect(wrapper.contains(<CommentBox/>));
    expect(wrapper.find(CommentBox).length).toEqual(1);

});