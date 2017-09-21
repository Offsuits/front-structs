import React from 'react';
import Person from './Person.jsx';
import RaisedButton from 'material-ui/RaisedButton';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dealer: 0,
      pot: 0,
      active: [true, true, true, true, true, true],
      show: false,
      name1: 'Easakfish',
      name2: 'MarcP[hole]',
      name3: 'Abhishark',
      name4: 'Moby Dick',
      styles : {
        1: {
          height: '10%',
          top: '35%',
          left: '55%',
          position: 'fixed'
        },

        2: {
          height: '10%',
          top: '55%',
          left: '39%',
          position: 'fixed'
        },

        3: {
          height: '10%',
          top: '55%',
          left: '23%',
          position: 'fixed'
        },

        4: {
          height: '10%',
          top: '35%',
          left: '6%',
          position: 'fixed'
        }
      }
    };

    this.currSeat = 1;
  }

  render() {


    return (
      <div>
        <div id="table"/>
        <div className="seats">
          <RaisedButton className="pot_button" label={`POT ${this.props.pot}`}  disabled={true} disabledBackgroundColor={'DimGray'} disabledLabelColor={'white'} />
          <div className="seat1">
            <Person player={this.currSeat===1} dealer={this.state.dealer===0} active={this.props.active1} card={this.props.seat1}
              stack={this.props.stack1} name={this.state.name1} bet={this.props.bet1} styles={this.state.styles[1]}
              seated={this.props.seated1}
              />
          </div>
          <div className="seat2">
            <Person player={this.currSeat===2} dealer={this.state.dealer===1} active={this.props.active2} card={this.props.seat2}
              stack={this.props.stack2} name={this.state.name2} bet={this.props.bet2} styles={this.state.styles[2]}
              seated={this.props.seated2}/>
          </div>
          <div className="seat3">
            <Person player={this.currSeat===3} dealer={this.state.dealer===2} active={this.props.active3} card={this.props.seat3}
              stack={this.props.stack3} name={this.state.name3} bet={this.props.bet3} styles={this.state.styles[3]}
              seated={this.props.seated3}/>
          </div>
          <div className="seat4">
            <Person player={this.currSeat===4} dealer={this.state.dealer===3} active={this.props.active4s} card={this.props.seat4}
              stack={this.props.stack4} name={this.state.name4} bet={this.props.bet4} styles={this.state.styles[4]}
              seated={this.props.seated4}/>
          </div>
        </div>
      </div>
    )
  }


  // <div className="seat5">
  //         <Person bot={false} player={this.currSeat===5} active={this.state.active[4]} card={this.props.seat1}
  //           stack={this.props.stack[0]}/>
  //       </div>
  //       <div className="seat6">
  //         <Person bot={false} player={this.currSeat===6} active={this.state.active[5]} card={this.props.seat2}
  //           stack={this.props.stack[0]}/>
  //       </div>


}

export default Table;
