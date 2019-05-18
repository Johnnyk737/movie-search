import React, { Component } from 'react'
import Axios from 'axios';
import config from '../../config/keys.json'
import "./styles/search.css"

class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchTerm: "",
      searchType: 's',
      results: [],
      response: false,
    }

    this.doSearch = this.doSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  doSearch(e) {
    e.preventDefault();
    let searchTerm = this.state.searchTerm !== "" ? this.state.searchTerm : "iron"
    console.log(searchTerm);
    Axios.get(`http://www.omdbapi.com/?${this.state.searchType}=${searchTerm}&apikey=${config.omdb_api}`)
      .then(response => {
        // console.log(response.data)
        return response.data
      })
      .then(data => {
        console.log(data);
        this.setState({
          results: data.Search,
          response: true
        })
      })
  }

  handleChange = (event) =>  {
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })

    console.log(this.state.searchTerm);
  }

  populateResults = () => {

  }

  // length = (arr) => {
  //   if (arr.length == 0 || arr.length == undefined || arr == []) {
  //     return 0
  //   }

  //   return arr.length;
  // }

  render() {
    return (
      <div className="container-fluid search">
        <form className="search-form" onSubmit={this.doSearch}>
          <select className="search-select" name="searchType" value={this.state.searchType} onChange={this.handleChange}>
            <option value="s">Search All</option>
            <option value="t">Title</option>
          </select>
          <input className="search-input form-control" type="text" name="searchTerm" onChange={this.handleChange}>
          </input>
          <input className="search-submit btn btn-primary" type="submit"></input>
        </form>
        <ul>
          {this.state.results && this.state.results.map((movie) => (
            <li>
              <img src={movie.Poster} height="200" width="135" />
              <div>
                {movie.Title}
              </div>
            </li>
          ))}
        </ul>
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
