import React, {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

import app from '../../App.js'
class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const filteredDestinations = destinationsList.filter(destination =>
      destination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="destination-search-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="destinations-list">
          {filteredDestinations.map(destination => (
            <DestinationItem
              key={destination.id}
              destinationDetails={destination}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
