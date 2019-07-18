import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function OptionBar() {
  return (
    <div style={{ display: 'flex' }}>
      <Form.Check inline type='radio' id='default-tab'
      label='Set as default tab.' defaultChecked />
      <FormControl type="text" placeholder="Search for word or pinyin"
      className="mr-sm-2" />
      <Button>Insert word manually</Button>
    </div>
  );
}

export default OptionBar;
