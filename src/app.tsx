import React from 'react';
import Foo from './foo';

class App extends React.PureComponent<{}, {}> {
  render() {
    return <Foo title='foo' message='hello' onClick={() => {}} />;
  }
}

export default App;