import React from 'react';
import '../styles/App.css';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import FilterBar from './FilterBar';
import OptionBar from './OptionBar';
import WordAccordion from './WordAccordion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tabs defaultActiveKey="chinese" transition={false} id="noanim-tab-example">
        
          <Tab eventKey="chinese" title="Chinese">
            <OptionBar />
            <div style={{ display: 'flex' }}>
              <FilterBar />
              <WordAccordion />
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