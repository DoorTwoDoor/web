import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';

import ModalDivider from '../../../common/components/ModalDivider';
import SocialMediaButton from '../../../common/components/SocialMediaButton';
import SignUpForm from './SignUpForm';

class ModalContent extends Component {
  render() {
    return (
      <Modal.Content>
        <SocialMediaButton
          color={'facebook'}
          name={'facebook f'}
          text={'Sign Up with Facebook'}
        />
        <ModalDivider />
        <SignUpForm />
      </Modal.Content>
    );
  }
}

export default ModalContent;
