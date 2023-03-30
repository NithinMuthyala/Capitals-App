import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {userText: countryAndCapitalsList[0].id}

  selectedIcon = event => {
    const {userText} = this.state
    console.log(event.target.value)
    this.setState({userText: event.target.value})
  }

  getCountry = () => {
    const {userText} = this.state

    const activeCountry = countryAndCapitalsList.find(
      eachItem => eachItem.id === userText,
    )

    return activeCountry.country
  }

  render() {
    const {userText} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            onChange={this.selectedIcon}
            value={userText}
            className="box-select"
          >
            {countryAndCapitalsList.map(eachObj => (
              <option
                className="option-text"
                value={eachObj.id}
                key={eachObj.id}
              >
                {eachObj.capitalDisplayText}
              </option>
            ))}
          </select>
          <span className="description">is capital of which country?</span>
          <p className="option-text">{this.getCountry()}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
