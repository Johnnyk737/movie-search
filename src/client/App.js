import React from 'react';
import './styles/App.css'
// import { GlobalStyle } from './styles/GlobalStyles'
import Search from './Search'
import TopBar from './TopBar'

const App = () =>
  <React.Fragment>
    {/* <GlobalStyle /> */}
    <TopBar />
    <Search />
  </React.Fragment>

export default App;
