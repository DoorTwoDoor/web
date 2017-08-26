import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';

import ForgotPasswordForm from './ForgotPasswordForm';

class ModalContent extends Component {
  render() {
    return (
      <Modal.Content>
        <ForgotPasswordForm />
      </Modal.Content>
    );
  }
}

export default ModalContent;
