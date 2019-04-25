import React from 'react';
// import './App.css'
import { GlobalStyle } from './styles/GlobalStyles'
import Search from './Search'

const App = () => 
  <div className="test">
    <GlobalStyle />
    <h1>Movie Search</h1>
    <Search />
  </div>

export default App;