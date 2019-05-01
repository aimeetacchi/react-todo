import { mount } from 'enzyme';
import React from 'react';
import App from './App';

describe('App', () => {
  let app = mount(<App />);

  it('renders the App Title', () => {
    //console.log(app.debug());
    expect(app.find('h1').text()).toEqual('List')
  })
});