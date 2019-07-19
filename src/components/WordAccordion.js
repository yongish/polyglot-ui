import React, { Component } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import Switch from "react-switch";

class WordAccordion extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }
  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="light" eventKey="0">
              Word
            </Accordion.Toggle>
          </Card.Header>
          <ButtonToolbar>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton className="Btn-Blue-BG" value={1}>Radio 1 (pre-checked)</ToggleButton>
              <ToggleButton value={2}>Radio 2</ToggleButton>
              <ToggleButton value={3}>Radio 3</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              hi
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="light" eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default WordAccordion;
