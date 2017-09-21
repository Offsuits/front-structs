import React, {Component} from 'react';
import Slider from 'material-ui/Slider';
// import slider from 'factory';

class ActionBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slider: 0
    }
  }

  handleSlider(event, value) {
    this.setState({slider: value});
  }


  render() {

    return (
      <div>
        <Slider id="range" value={this.state.slider} onChange={this.handleSlider.bind(this)} min={0} max={this.props.max} step={1} />
        <div disabled="true" id="call_button" onClick={() => this.props.bet(false)}>CHECK<br/>()</div>
        <div id="bet_button" onClick={() => this.props.bet(true)}>BET<br/>()</div>
        <div id="raise_button" onClick={this.props.allIn}>ALL IN<br/> </div>
        <div id="fold_button" onClick={this.props.fold}>FOLD<br/> </div>
        <div id="bet_input" defaultValue="0">
          {this.state.slider}
        </div>
      </div>
    )
  }
}
// <div id="range"/>
  //buttons in the middle
// <input id="bet_input" defaultValue="0"/>

// <Slider id="range" value={this.state.slider} onChange={this.handleSlider.bind(this)} min={0} max={this.props.sliderMax} step={1} />

export default ActionBar;
