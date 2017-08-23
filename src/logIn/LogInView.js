import React, { Component } from 'react';
import {
  Button,
  Divider,
  Modal,
} from 'semantic-ui-react';

import SocialMediaButton from '../common/components/SocialMediaButton';
import LogInForm from './components/LogInForm';

class LogInView extends Component {
  render() {
    return (
      <Modal
        closeIcon={'close'}
        trigger={<Button>Log In</Button>}
      >
        <Modal.Header>
          Log In
        </Modal.Header>
        <Modal.Content>
          <SocialMediaButton
            color={'facebook'}
            name={'facebook f'}
            text={'Log In with Facebook'}
          />
          <Divider horizontal>
            Or
          </Divider>
          <LogInForm />
        </Modal.Content>
        <Modal.Actions>
          <p>
            <span>Don't have an account? </span>
            <a href={'http://www.google.com'}>
              Sign Up
            </a>
          </p>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default LogInView;
