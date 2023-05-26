import React from 'react';
import { Game } from './components/Game';
import styled from 'styled-components';

function App() {
  return (
    <Center><Game /></Center>
  );
}

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export default App;
