import React from 'react';
import './App.css';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tabs defaultActiveKey="chinese" transition={false} id="noanim-tab-example">
          <Tab eventKey="chinese" title="Chinese">
            <div style={{ display: 'flex' }}>
              <Form.Check inline type='radio' id='default-tab'
              label='Set as default tab.' defaultChecked />
              <FormControl type="text" placeholder="Search for word or pinyin"
              className="mr-sm-2" />
            </div>
            <div style={{ display: 'flex' }}>
              <div>
                <h3 style={{ textDecoration: 'underline' }}>Familarity</h3>
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
              <div>

              </div>
            </div>
          </Tab>
          <Tab eventKey="english" title="English (coming soon!)" disabled>
            "to put english tab here"
          </Tab>
          <Tab eventKey="german" title="German (coming soon!)" disabled>
            "to put german tab here"
          </Tab>
          <Tab eventKey="japanese" title="Japanese (coming soon!)" disabled>
            "to put japanese tab here"
          </Tab>
          <Tab eventKey="spanish" title="Spanish (coming soon!)" disabled>
            "to put spanish tab here"
          </Tab>
        </Tabs>
      </header>
    </div>
  );
}

export default App;
