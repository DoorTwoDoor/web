import React, { Component } from 'react';
import {
  Button,
  Divider,
  Modal,
} from 'semantic-ui-react';

import SocialMediaButton from '../common/components/SocialMediaButton';
import SignUpForm from './components/SignUpForm';

class SignUpView extends Component {
  render() {
    return (
      <Modal
        closeIcon={'close'}
        trigger={<Button>Sign Up</Button>}
      >
        <Modal.Header>
          Sign Up
        </Modal.Header>
        <Modal.Content>
          <SocialMediaButton
            color={'facebook'}
            name={'facebook f'}
            text={'Sign Up with Facebook'}
          />
          <Divider horizontal>
            Or
          </Divider>
          <SignUpForm />
        </Modal.Content>
        <Modal.Actions>
          <p>
            <span>Already have an account? </span>
            <a href={'http://www.google.com'}>
              Log In
            </a>
          </p>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default SignUpView;
