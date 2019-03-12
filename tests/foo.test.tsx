import React from "react";
import { shallow } from 'enzyme';

import Foo from 'foo';

describe('Foo', () => {
  const props = {
    title: 'foo',
    message: 'bar',
  };

  it('render', () => {
    const wrapper = shallow(<Foo {...props} />);

    expect(wrapper.find('h1').text()).toBe(props.title);
    expect(wrapper.find('span').text()).toBe(props.message);
  });

  it('on click', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Foo {...props} onClick={onClick} />);

    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});