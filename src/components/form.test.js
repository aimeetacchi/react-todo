import { mount } from 'enzyme';
import React from 'react';
import Form from './form';


describe('Form', ()=> {
    let form = mount(<Form />);

    it('renders a form to fill in a todo', () => {
        //console.log(form.debug());
        expect(form.hasClass('addtodo'))
    })
});
