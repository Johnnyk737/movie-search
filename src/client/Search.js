import React, { Component } from 'react'
// import Axios from 'axios';
// import config from '../../config/keys.json'

class Search extends Component {

  constructor(props) {
    super(props)

    this.doSearch = this.doSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  doSearch(e) {
    e.preventDefault();
    let searchTerm = "iron";
    console.log("Hello");
    console.log(searchTerm);
    // Axios.get("http://www.omdbapi.com/?apikey="+config.OMDIApi_key+"&s="+searchTerm)
    //   .then(response => {
    //     console.log(response)
    //   })
  }

  handleChange(event) {
    console.log(event.target.value);
  }


  render() {
    console.log("REndering")
    return (
      <div>
        <form className="test" onSubmit={this.doSearch}>
          <input type="text" onChange={this.handleChange}>
          </input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default Search;

// movie api
// http://www.omdbapi.com/

// Send all data requests to:
// "http://www.omdbapi.com/?apikey="+OMDIApi_key+"&"

// Poster API requests:
// http://img.omdbapi.com/?apikey=[yourkey]&