import React, { Component } from 'react';
import {
  Button,
  Modal,
} from 'semantic-ui-react';

import ModalActions from '../common/components/ModalActions';
import ModalHeader from '../common/components/ModalHeader';
import ModalContent from './components/ModalContent';

class LogInView extends Component {
  render() {
    const trigger = <Button inverted>Log In</Button>;

    return (
      <Modal closeIcon={'close'} trigger={trigger}>
        <ModalHeader text={'Log In'} />
        <ModalContent />
        <ModalActions type={'log in'} />
      </Modal>
    );
  }
}

export default LogInView;
