import React, { Component } from 'react';
import {
  Button,
  Icon,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class SocialMediaButton extends Component {
  render() {
    const { color } = this.props;
    const { name } = this.props;
    const { text } = this.props;

    return (
      <Button color={color} fluid>
        <Icon name={name} />
        {text}
      </Button>
    );
  }
}

SocialMediaButton.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SocialMediaButton;
