import React, { Component } from 'react'
import Axios from 'axios';
import config from '../../config/keys.json'

class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ""
    }

    this.doSearch = this.doSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  doSearch(e) {
    e.preventDefault();
    let searchTerm = this.state.searchTerm !== "" ? this.state.searchTerm : "iron"
    console.log(searchTerm);
    Axios.get("http://www.omdbapi.com/?s="+searchTerm+"&y=2019&apikey="+config.omdb_api)
      .then(response => {
        console.log(response)
      })
  }

  handleChange = (event) =>  {
    // console.log(event.target.value);
    this.setState({
      searchTerm: event.target.value
    })

    console.log(this.state.searchTerm);
  }


  render() {
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