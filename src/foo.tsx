import React from 'react';

interface FooProps {
  title: string;
  message: string;
  onClick: () => void;
}

export class Foo extends React.PureComponent<FooProps, {}> {
  render() {
    return(
      <div onClick={this.props.onClick}>
        <h1>{this.props.title}</h1>
        <span>{this.props.message}</span>
      </div>
    );
  }
}

export default Foo;