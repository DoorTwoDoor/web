import React, { Component } from 'react';
import {
  Button,
  Modal,
} from 'semantic-ui-react';

import ModalActions from '../common/components/ModalActions';
import ModalHeader from '../common/components/ModalHeader';
import ModalContent from './components/ModalContent';

class ForgotPasswordView extends Component {
  render() {
    const trigger = <Button>Forgot Password</Button>;

    return (
      <Modal closeIcon={'close'} trigger={trigger}>
        <ModalHeader text={'Forgot Password'} />
        <ModalContent />
        <ModalActions type={'forgot password'} />
      </Modal>
    );
  }
}

export default ForgotPasswordView;
