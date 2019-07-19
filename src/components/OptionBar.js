import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function OptionBar() {
  return (
    <div style={{ display: 'flex', borderBottom: '1px solid black', margin: 10, padding: 10 }}>
      <Form.Check inline type='radio' id='default-tab'
      label='Set as default tab.' defaultChecked />
      <FormControl type="text" placeholder="Search for word or pinyin"
      className="col-md-6" style={{ margin: 10 }} />
      <Button>Insert word manually</Button>
    </div>
  );
}

export default OptionBar;
