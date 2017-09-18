import React from 'react';
import Person from './Person.jsx';

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
      name4: 'Whitewhale'
    };

    this.currSeat = 1;
  }

  render() {
    return (
      <div>
      <div id="table"/>
      <div className="seats">
        <div className="seat1">
          <Person bot={false} player={this.currSeat===1} dealer={this.state.dealer===0} active={this.state.active[0]} card={this.props.seat1}
            stack={this.props.stack1} name={this.state.name1}/>
        </div>
        <div className="seat2">
          <Person bot={false} player={this.currSeat===2} dealer={this.state.dealer===1} active={this.state.active[1]} card={this.props.seat2}
            stack={this.props.stack2} name={this.state.name2}/>
        </div>
        <div className="seat3">
          <Person bot={false} player={this.currSeat===3} dealer={this.state.dealer===2} active={this.state.active[2]} card={this.props.seat3}
            stack={this.props.stack3} name={this.state.name3}/>
        </div>
        <div className="seat4">
          <Person bot={false} player={this.currSeat===4} dealer={this.state.dealer===3} active={this.state.active[3]} card={this.props.seat4}
            stack={this.props.stack4} name={this.state.name4}/>
        </div>
      </div>

    </div>)
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
