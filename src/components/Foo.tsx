import React from 'react';

interface FooProps {
  title: string;
  message: string;
  onClick?: () => void;
}

function Foo(props: FooProps) {
  return (
    <div onClick={props.onClick}>
      <h1>{props.title}</h1>
      <span>{props.message}</span>
    </div>
  );
}

export default React.memo(Foo);