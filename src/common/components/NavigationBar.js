import React, { Component } from 'react';
import {
  Button,
  Container,
  Menu,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class NavigationBar extends Component {
  render() {
    return (
      <Container>
        <Menu
          inverted
          pointing
          secondary
          defaultActiveIndex={0}
          size={'large'}
          stackable
          style={styles.menu}
        >
          <Menu.Item header>DoorTwoDoor</Menu.Item>
          <Menu.Menu position={'right'}>
            <Button inverted>Log In</Button>
            <Button inverted>Sign Up</Button>
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
}

const styles = {
  menu: {
    borderWidth: 0,
  },
};

export default NavigationBar;
