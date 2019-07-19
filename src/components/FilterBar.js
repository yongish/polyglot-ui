import React, {useState} from 'react';

import Form from 'react-bootstrap/Form';
import {StatefulCheckbox} from 'baseui/checkbox';

function FilterBar() {
  const [checked, setChecked] = useState(true);
  return (
    <div>
    <h3 style={{ textDecoration: 'underline' }}>Familarity</h3>
    <StatefulCheckbox
        onChange={console.log}
        labelPlacement="right"
      >
        Label on the right
      </StatefulCheckbox>
    <Form>
      <Form.Check type='checkbox' id='familiar' label="familiar"/>
      <Form.Check type='checkbox' id='unfamiliar' label="unfamiliar" />
    </Form>
    <h3 style={{ textDecoration: 'underline' }}>Writing</h3>
    <Form>
      <Form.Check type='checkbox' id='traditional' label="traditional"/>
      <Form.Check type='checkbox' id='simplified' label="simplified" />
    </Form>
    <h3 style={{ textDecoration: 'underline' }}>Display Language</h3>
    <Form>
      <Form.Check type='radio' id='display-chinese' label="Chinese"/>
      <Form.Check type='radio' id='display-english' label="English" />
    </Form>
  </div>
  );
}

export default FilterBar;
