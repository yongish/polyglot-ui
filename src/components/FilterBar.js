import React from 'react';

import Form from 'react-bootstrap/Form';

import '../styles/FilterBar.css';

const h3Style = {
  textDecoration: 'underline'
};
const formStyle = {
  display: 'inline-block'
};
const formCheckStyle = {
  textAlign: 'left',
};

function FilterBar() {
  return (
    <div>
      <h3 style={h3Style}>Familarity</h3>
      <Form style={formStyle}>
        <Form.Check style={formCheckStyle} type='checkbox' id='familiar' label="familiar"/>
        <Form.Check style={formCheckStyle} type='checkbox' id='unfamiliar' label="unfamiliar" />
      </Form>
      <h3 style={h3Style}>Writing</h3>
      <Form style={formStyle}>
        <Form.Check style={formCheckStyle} type='checkbox' id='traditional' label="traditional"/>
        <Form.Check style={formCheckStyle} type='checkbox' id='simplified' label="simplified" />
      </Form>
      <h3 style={h3Style}>Display Language</h3>
      <Form style={formStyle}>
        <Form.Check style={formCheckStyle} type='radio' name='display-radio' id='display-chinese' label="Chinese" />
        <Form.Check style={formCheckStyle} type='radio' name='display-radio' id='display-english' label="English" />
      </Form>
    </div>
  );
}

export default FilterBar;
