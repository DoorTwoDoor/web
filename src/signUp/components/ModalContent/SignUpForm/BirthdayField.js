import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

import {
  getDayOptions,
  getMonthOptions,
  getYearOptions,
} from '../../../utilities/Helper';

class BirthdayField extends Component {
  render() {
    const dayOptions = getDayOptions(2017, 2);
    const monthOptions = getMonthOptions();
    const yearOptions = getYearOptions();

    return (
      <Form.Group widths={'equal'}>
        <Form.Select
          name={'month'}
          placeholder={'Month'}
          options={monthOptions}
        />
        <Form.Select
          name={'day'}
          placeholder={'Day'}
          options={dayOptions}
        />
        <Form.Select
          name={'year'}
          placeholder={'Year'}
          options={yearOptions}
        />
      </Form.Group>
    );
  }
}

export default BirthdayField;
