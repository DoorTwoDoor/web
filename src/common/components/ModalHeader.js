import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ModalHeader extends Component {
  render() {
    const { text } = this.props;

    return (
      <Modal.Header>
        {text}
      </Modal.Header>
    );
  }
}

ModalHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ModalHeader;
