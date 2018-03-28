import React, { Component } from 'react';
import { Segment, Form } from 'semantic-ui-react';

import NavigationBar from './common/components/NavigationBar';
import LogInView from './logIn/LogInView';
import SignUpView from './signUp/SignUpView';
import ForgotPasswordView from './forgotPassword/ForgotPasswordView';

class App extends Component {
  render() {
    const logInView = <LogInView />;
    const forgotPasswordView = <ForgotPasswordView />;
    const signUpView = <SignUpView />;


    return (
      <Segment
        inverted
        vertical
        color={'blue'}
        textAlign={'center'}
//        style={styles.segment}
      >
        <NavigationBar
          logInView={logInView}
          forgotPasswordView={forgotPasswordView}
          signUpView={signUpView}
        />
        <Segment vertical textAlign={'center'} style={{marginLeft: 'auto', marginRight: 'auto'}}>
          <Form>
            <Form.Group>
            <Form.Input name={'from'} placeholder={'From'} />
            <Form.Input name={'to'} placeholder={'To'} />
            <Form.Button>Search</Form.Button>
          </Form.Group>
          </Form>
        </Segment>
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
