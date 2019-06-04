import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Axios from 'axios';
import config from '../../config/keys.json'
import * as SearchActions from '../store/actions/actions'
// import store from '../store/createStore.js';

//Convert to stateless
class Search extends Component {

  constructor(props) {
    super(props)
  }

  doSearch = (e) => {
    e.preventDefault();

    const { searchType, searchString } = this.props

    console.log("Fetching movies")
    this.props.SearchActions.fetchMovies(searchType, searchString)
  }

  handleTypeChange = (event) =>  {
    this.props.SearchActions.setSearchType(event.target.value)

    this.setState({
      searchType: this.props.searchType ? this.props.searchType : event.target.value
    })
    console.log(this.state)
  }

  handleSearchStringChange = (event) => {
    this.props.SearchActions.setSearchString(event.target.value)

    this.setState({
      searchString: this.props.searchString ? this.props.searchString : event.target.value
    })
  }

  render() {
    return (
      <div className="container-fluid search">
        <form className="search-form" onSubmit={this.doSearch}>
          <select className="search-select" name="searchType" value={this.props.searchType} onChange={this.handleTypeChange}>
            <option value="s">Search All</option>
            <option value="t">Title</option>
          </select>
          <input className="search-input" type="text" name="searchTerm" onChange={this.handleSearchStringChange}>
          </input>
          <input className="search-submit btn btn-primary" type="submit"></input>
        </form>
        {this.props.totalResults != undefined &&
          this.props.movies.map((movie, index) => (
            <ul key={index}>
              <li>
                <h3>{movie.Title}</h3>
              </li>
            </ul>
          ))}
      </div>
    )
  }
}

//add mapper here

function mapStateToProps(state, props) {
  console.log("state: ", state)
  console.log("props:", props)
  const { searchType, searchString, movies, totalResults } = state.search

  return {
    searchType: searchType,
    searchString: searchString,
    movies: movies,
    totalResults: totalResults
  }
}

function mapDispatchToProps(dispatch) {
  return {
    SearchActions: bindActionCreators(SearchActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

// movie api
// http://www.omdbapi.com/

// Send all data requests to:
// "http://www.omdbapi.com/?apikey="+OMDIApi_key+"&"

// Poster API requests:
// http://img.omdbapi.com/?apikey=[yourkey]&
