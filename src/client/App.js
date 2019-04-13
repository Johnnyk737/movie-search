import React from 'react';
import './App.css'
import styled from 'styled-components'
import { AppS } from './styles/AppS'
import { GlobalStyle } from './styles/GlobalStyles'

// const AppContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   font-size: 5em;
//   background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
// `;

// const App = () => <AppS>Hello from SSR</AppS>;

const App = () => <div className="test">
  <GlobalStyle />
  Hello from SSR</div>

export default App;