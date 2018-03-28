import React, { Component } from 'react';
import {
  Container,
  Menu,
} from 'semantic-ui-react';

class NavigationBar extends Component {
  render() {
    const { logInView } = this.props;
    const { signUpView } = this.props;

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
          <Menu.Item header>
            DoorTwoDoor
          </Menu.Item>
          <Menu.Menu position={'right'}>
            {logInView}
            {signUpView}
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
}

/*
NavigationBar.propTypes = {
  login: PropTypes.isRequired,

}
*/

const styles = {
  menu: {
    borderWidth: 0,
  },
};

export default NavigationBar;
