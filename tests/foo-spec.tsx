import * as React from 'react';
import { shallow } from 'enzyme';
import { Foo } from '../src/foo';

describe('foo', () => {
  it('foo', () => {
    let clickSpy = jasmine.createSpy('onClick');
    let foo = shallow(<Foo title='azaza' message='ololo' onClick={clickSpy} />);

    expect(foo.find('.foo').prop('onClick')).toBe(clickSpy);
    foo.find('.foo').simulate('click');
    expect(clickSpy).toHaveBeenCalled();

    expect(foo.find('.foo__title').exists()).toBeTruthy();
    expect(foo.find('.foo__title').text()).toBe('azaza');

    expect(foo.find('.foo__message').exists()).toBeTruthy();
    expect(foo.find('.foo__message').text()).toBe('ololo');
  });
});