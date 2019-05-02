import { mount } from 'enzyme';
import React from 'react';
import Form from './form';


describe('Form', ()=> {
    let form = mount(<Form />);

    it('renders a form to fill in a todo', () => {
        //console.log(form.debug());
        expect(form.hasClass('addtodo'))
    })

    it('renders the clear button', () => {
        //console.log(form.debug());
        expect(form.find('p').text()).toEqual('List is empty try adding a todo')
    })
});
