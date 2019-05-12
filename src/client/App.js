import React from 'react';
import './styles/App.css'
// import { GlobalStyle } from './styles/GlobalStyles'
import Search from './Search'
import TopBar from './TopBar'

const App = () =>
  <div className="test">
    {/* <GlobalStyle /> */}
    <TopBar />
    <Search />
  </div>

export default App;
