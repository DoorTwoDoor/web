import React, { Component } from 'react';
import {
  Button,
  Modal,
} from 'semantic-ui-react';

import ModalActions from '../common/components/ModalActions';
import ModalHeader from '../common/components/ModalHeader';
import ModalContent from './components/ModalContent';

class SignUpView extends Component {
  render() {
    const trigger = <Button>Sign Up</Button>;

    return (
      <Modal closeIcon={'close'} trigger={trigger}>
        <ModalHeader text={'Sign Up'} />
        <ModalContent />
        <ModalActions type={'sign up'} />
      </Modal>
    );
  }
}

export default SignUpView;
