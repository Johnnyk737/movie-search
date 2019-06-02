import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';
import config from '../../config/keys.json'
import { fetchMovies, setSearchType, setSearchString } from '../store/actions/actions'
// import store from '../store/createStore.js';

//Convert to stateless
class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchString: "",
      searchType: 's',
    }

    this.doSearch = this.doSearch.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  doSearch(e) {
    e.preventDefault();

    let { searchType, searchString } = this.state

    //Need to move this to an action
    // console.log(`http://www.omdbapi.com/?${this.state.searchType}=${this.state.searchString}&apikey=${config.omdb_api}`)
    // Axios.get(`http://www.omdbapi.com/?${this.state.searchType}=${this.state.searchString}&apikey=${config.omdb_api}`)
    //   .then(response => {
    //     console.log(response.data)
    //   })
    console.log("Fetching movies")
    this.props.dispatch(fetchMovies(searchType, searchString))
  }

  handleTypeChange = (event) =>  {
    this.props.dispatch(setSearchType(event.target.value))

    this.setState({
      searchType: this.props.searchType ? this.props.searchType : event.target.value
    })
    console.log(this.state)
  }

  handleSearchStringChange = (event) => {
    this.props.dispatch(setSearchString(event.target.value))

    this.setState({
      searchString: this.props.searchString ? this.props.searchString : event.target.value
    })
  }

  render() {
    return (
      <div>
        <form className="search-form" onSubmit={this.doSearch}>
          <select className="search-select" name="searchType" value={this.props.searchType} onChange={this.handleTypeChange}>
            <option value="s">Search All</option>
            <option value="t">Title</option>
          </select>
          <input className="search-input" type="text" name="searchTerm" onChange={this.handleSearchStringChange}>
          </input>
          <input className="search-submit" type="submit"></input>
        </form>
      </div>
    )
  }
}

//add mapper here

export default connect((state, props) => {
  return {
    searchType: state.searchType,
    searchString: state.searchString
  }

})(Search);

// movie api
// http://www.omdbapi.com/

// Send all data requests to:
// "http://www.omdbapi.com/?apikey="+OMDIApi_key+"&"

// Poster API requests:
// http://img.omdbapi.com/?apikey=[yourkey]&
