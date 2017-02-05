import * as React from 'react';

export interface FooProps {
  title: string;
  message: string;
  onClick: () => void;
}

export class Foo extends React.Component<FooProps, {}> {
  render() {
    return(
      <div className='foo' onClick={this.props.onClick}>
        <div className='foo__title'>{this.props.title}</div>
        <div className='foo__message'>{this.props.message}</div>
      </div>
    );
  }
}

