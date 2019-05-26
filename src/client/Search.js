import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';
import config from '../../config/keys.json'

//Convert to stateless
class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchTerm: "",
      searchType: 's',
    }

    this.doSearch = this.doSearch.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  doSearch(e) {
    e.preventDefault();
    let searchTerm = this.state.searchTerm !== "" ? this.state.searchTerm : "iron"
    console.log(searchTerm);
    Axios.get(`http://www.omdbapi.com/?${this.state.searchType}=${searchTerm}&apikey=${config.omdb_api}`)
      .then(response => {
        console.log(response.data)
      })
  }

  handleTypeChange = (event) =>  {
    // console.log(event.target.value);
    // this.setState({
    //   [event.target.name]: event.target.value
    // })
    this.props.dispatch({type:'SET_SEARCH_TYPE', data: {searchType: event.target.value}})

    // console.log('state ', this.props.getState());
  }

  handleSearchStringChange = (event) => {
    this.props.dispatch({
      type: 'SET_SEARCH_STRING',
      data: {
        searchString: event.target.value
      }
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
