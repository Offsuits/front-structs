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
        <div id="dealer_chip">
          {this.props.dealer && <img id="dealer" src="images/dealerchip.png" style={styles.dealer}/>}
        </div>
        <div className="transbox">
          <p>{this.props.bet}</p>
        </div>
        <img id="emptyseat" src="images/seat_empty.png" style={styles.seat}/>
          <b>SIT</b>

        <div className="playercontainer">
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
