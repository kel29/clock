import React from 'react';
import './App.css';
import Clock from './components/Clock'
import { Container } from 'semantic-ui-react'

function App() {
  return (
    <Container className='main'>
      <Clock />
    </Container>
  );
}

export default App;
