import {Component} from 'react'
import TabsList from '../TabsList'
import ImagesList from '../ImagesList'
import './index.css'

class MatchGame extends Component {
  state = {score: 0, isTimerRunning: true, time: 60, tabId: 'FRUIT'}

  getDpImg = () => {
    const {imagesList} = this.props
    const mainImg = Math.random(imagesList)
    return mainImg
  }

  renderLists = () => {
    const mainImg = this.getDpImg
    const {tabId} = this.state
    const {tabsList, imagesList} = this.props
    const filteredImagesList = imagesList.filter(
      each => each.category === tabId,
    )
    const {imageUrl} = mainImg.imageUrl
    return (
      <div className="divLists">
        <img src={imageUrl} alt="match" />
        <div className="buttonsDiv">
          {tabsList.map(each => (
            <TabsList key={each.tabId} tabItem={each} />
          ))}
        </div>
        <ul>
          {filteredImagesList.map(each => (
            <ImagesList key={each.id} imageItem={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {score, time, isTimerRunning} = this.state
    return (
      <div className="div1">
        <div className="div2">
          <nav className="nav">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
              className="logo"
            />
            <div className="score">
              <p>
                Score:
                <span className="span">{score}</span>
              </p>
              <div className="timer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                  alt="timer"
                  className="timerLogo"
                />
                <p className="span">{time} sec</p>
              </div>
            </div>
          </nav>
          <div className="div3">{isTimerRunning ? this.renderLists() : ''}</div>
        </div>
      </div>
    )
  }
}

export default MatchGame
