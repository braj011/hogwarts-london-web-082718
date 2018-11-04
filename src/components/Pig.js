import React, { Component } from 'react'

class Pig extends Component {

  state = {
    pigDeets: false
  }

  makeImgUrl = () => {
    let imgPig = this.props.pig.name.toLowerCase().split(' ').join('_')
    return require(`../hog-imgs/${imgPig}.jpg`)   // need require here - to 
  }
  
  render() {
    const { pig, hidePig } = this.props

    return (
      <div className="ui eight wide column">
      <div className="ui card">
        <div className="content">
          <a className="header">{pig.name}</a>
          <div className="img">
            <img src={this.makeImgUrl()} alt={pig.name} />
          </div>
          {this.state.pigDeets ? 
            <div >
              <div className="meta">
                <span className="date">{pig.specialty}</span>
              </div>
              <div className="description">
              {pig.greased ? "Greased" : "Not Greased.... yet"}
              </div>
              <button onClick={() => {this.setState({pigDeets: !this.state.pigDeets})}}>Less details</button>
            </div>
            :
            <button onClick={() => {this.setState({pigDeets: !this.state.pigDeets})}}> <strong>Click</strong> for more details! </button>
          } <br></br> 
          <div className="hide-button">
            <button onClick={() => hidePig(pig)}>Hide Pigs</button>
          </div>
        </div>
      </div>
        
    </div>
    )
  }


} 

export default Pig 