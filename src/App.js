import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import NavigationBar from './common/components/NavigationBar';
import LogInView from './logIn/LogInView';
import SignUpView from './signUp/SignUpView';

class App extends Component {
  render() {
    return (
      <Segment
        inverted
        vertical
        color={'blue'}
        textAlign={'center'}
//        style={styles.segment}
      >
        <NavigationBar />
        <LogInView />
        <SignUpView />
      </Segment>
    );
  }
}

const styles = {
  segment: {
    minHeight: '100vh',
  },
};

export default App;
