import React from 'react';
import './App.css';
import Clock from './components/Clock'
import { Container, Header } from 'semantic-ui-react'

function App() {
  return (
    <>
      <Header>
        <h1 className='head'>React Clock</h1>
      </Header>
      <Container className='main'>
        <Clock />
      </Container>
    </>
  );
}

export default App;
