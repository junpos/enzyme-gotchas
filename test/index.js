import React, { Component } from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

class MyComponent extends Component {
  render() {
    return (
      <div className='foo' />
    );
  }
}

it('should render component', function () {
  const wrapper = shallow(<MyComponent />);
});
