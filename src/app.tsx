import * as React from 'react';
import {Foo} from './foo';

export class App extends React.Component<{}, {}> {
  render() {
    return <Foo title='azaza' message='ololo' onClick={() => {}} />;
  }
}
