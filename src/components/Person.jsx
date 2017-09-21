import React from 'react';

class Person extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const styles = {
      dealer: {
        height: '3%',
      },
      seat: {
        height: '5%',
      },
      imgOp: {
        opacity: this.props.active
      }
    }

    return (
      <div>
        <div className="betchips">
          {this.props.bet !== 0 && <img id="chips1" src="images/chip0005.png"/>}
          {this.props.bet !== 0 && <img id="chips2" src="images/chip0005.png"/>}
          {this.props.bet !== 0 && <img id="chips3" src="images/chip0005.png"/>}
          {this.props.bet !== 0 && <img id="chips4" src="images/chip0005.png"/>}
        </div>
        <div className="transbox" hidden={!this.props.seated}>
          <p>{this.props.bet}</p>
        </div>
        <img id="emptyseat" src="images/seat_empty.png" hidden={this.props.seated} style={this.props.styles}
          onClick={() => this.props.takeSeat(this.props.seatNum)}
        />

        <div className="playercontainer" hidden={!this.props.seated}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <img id="left" src={this.props.card} style={styles.imgOp}/>
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
  }
}

export default Person;
