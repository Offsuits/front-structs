import React from 'react';

class Person extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    var imgOp = {
      opacity: '0.5'
    }


    if (!this.props.bot) {
      return (
        <div>
          <div className="playercontainer">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <img id="left" src={this.props.card} style={imgOp}/>
              <img id="right" src="nobus/blank.png"/>
            </div>
            <div id="name">
              {this.props.name}
            </div>
            <div id="chipcount">
              {this.props.stack}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="playercontainer">
            <div id="name_bot">
              {this.props.name}
            </div>
            <div id="chipcount_bot">
              {this.props.stack}
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <img id="left" src={this.props.card} style={imgOp}/>
              <img id="right" src="nobus/blank.png"/>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Person;
