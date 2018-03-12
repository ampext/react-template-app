import React from 'react';
import { shallow } from 'enzyme';
import Foo from 'foo';

describe('foo', () => {
  it('render', () => {
    const clickSpy = jasmine.createSpy('onClick');
    const foo = shallow(<Foo title='foo' message='bar' onClick={clickSpy} />);

    foo.simulate('click');
    expect(clickSpy).toHaveBeenCalled();

    expect(foo.find('h1').length).toBe(1);
  });
});