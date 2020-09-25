import React from 'react';
import styled from 'styled-components';

import {Card} from './card.component';

import './App.css';

const Text = styled.div`
  color:white;
  font-size:24px;
  border: ${( {isActive} ) => isActive ? '1px solid black': '3px dotted pink' }
`
const textStyles = {
  color:'white',
  fontSize: '24px'
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card> 
          <Text isActive={false} >
            i'm component
          </Text>  
        </Card>
      </header>
    </div>
  );
}

export default App;
