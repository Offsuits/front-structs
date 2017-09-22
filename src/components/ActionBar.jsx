import React, {Component} from 'react';
import Slider from 'material-ui/Slider';
// import slider from 'factory';

class ActionBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slider: 0
    }

    this.handleSlider = this.handleSlider.bind(this);
    this.sendBet = this.sendBet.bind(this);
  }

  handleSlider(event, value) {
    event.preventDefault();
    console.log(value);
    this.setState({slider: value});
  }

  sendBet() {
    console.log(this.state.slider);
    // var result = this.state.slider.bind(this);
    this.props.bet(true, this.state.slider);
  }

  render() {

    return (
      <div>
        <Slider id="range" value={this.state.slider} onChange={this.handleSlider.bind(this)} min={this.props.sliderMin} max={this.props.sliderMax} step={1} />
        <div id="call_button" onClick={() => this.props.bet(false)}>CHECK<br/>()</div>
        <div id="bet_button" onClick={this.sendBet}>BET<br/>()</div>
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
