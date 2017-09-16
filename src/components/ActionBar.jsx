import React from 'react';
// import slider from 'factory';


class ActionBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  // componentDidMount() {
  //   var range = document.getElementById('range');

  //   noUiSlider.create(range, {
  //     start: [ 0 ], // 4 handles, starting at...
  //     behaviour: 'tap-drag', // Move handle on tap, bar is draggable
  //     step: 50,
  //     tooltips: false,
  //     range: {
  //       'min': 0,
  //       'max': 1000
  //     },
  //     // pips: { // Show a scale with the slider
  //     //   mode: 'steps',
  //     //   stepped: true,
  //     //   density: 4
  //     // }
  //   });
  // }

  render() {
    return (
      <div>
        <div id="range"/>
        <div id="call_button">CHECK<br/>()</div>
        <div id="bet_button">BET<br/>()</div>
        <div id="raise_button">ALL IN<br/> </div>
        <div id="fold_button">FOLD<br/> </div>
        <input id="bet_input" defaultValue="0"/>
      </div>
    )
  }
}

export default ActionBar;