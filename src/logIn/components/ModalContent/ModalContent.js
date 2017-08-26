import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';

import ModalDivider from '../../../common/components/ModalDivider';
import SocialMediaButton from '../../../common/components/SocialMediaButton';
import LogInForm from './LogInForm';

class ModalContent extends Component {
  render() {
    return (
      <Modal.Content>
        <SocialMediaButton
          color={'facebook'}
          name={'facebook f'}
          text={'Log In with Facebook'}
        />
        <ModalDivider />
        <LogInForm />
      </Modal.Content>
    );
  }
}

export default ModalContent;
