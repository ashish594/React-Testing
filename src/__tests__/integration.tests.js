import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';


let wrapper;

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Fetch Comment 1'}, {name: 'Fetch Comment 2'}]
    })
});

afterEach(() => {
    moxios.uninstall();
});

it('making an api call should give results', (done) => {
    wrapper = mount(
        <Root>
            <App />
        </Root>
    );

    wrapper.find('.fetch-comments').simulate('click');

    moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find('li').length).toEqual(2);
    done();
    });

});
