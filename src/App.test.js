import { mount } from 'enzyme';
import React from 'react';
import App from './App';

describe('App', () => {
  let app = mount(<App />);

  it('renders the App Title', () => {
    expect(app.find('h1').text()).toEqual('Your Todo List')
  })

  describe('When rendering the form', () => {
    it('creates a Form Component', () => {
      expect(app.find('Form').exists()).toBe(true);
    })
  })
});