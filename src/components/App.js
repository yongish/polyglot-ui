import React, { PureComponent } from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { connect } from 'react-redux'
import {RemoveScrollBar} from 'react-remove-scroll-bar';

import FilterBar from './FilterBar';
import OptionBar from './OptionBar';
import WordAccordion from './WordAccordion';

import '../styles/App.css';

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    // counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
  // increment, decrement, reset
};

class App extends PureComponent {
  render() {
    return (
      <div className="App">
      <RemoveScrollBar />
        <header className="App-header">
          <Tabs defaultActiveKey="chinese" transition={false} id="noanim-tab-example">

            <Tab eventKey="chinese" title="Chinese">
              <OptionBar />
              <div style={{ display: 'flex', height: '100vh' }}>
                <FilterBar />
                <div className="col-md-10" style={{height: '80vh' , overflowY: 'auto'}}>
                <WordAccordion />
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
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
