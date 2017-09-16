import React from 'react';

class ClearButton extends React.Component {
  constructor( props, context ) {
    super( props, context );

    this.handleClearMessages = this.handleClearMessages.bind( this );
  }
  handleClearMessages() {
    this.props.clearMessages();
  }
  render() {
    let button = <button onClick={this.handleClearMessages} >Clear</button>;
    if ( this.props.isDisabled ) {
      button = <button disabled="disabled">Clear</button>;
    }
    return <div>{button}</div>;
  }
}


class PostMessageForm extends React.Component {
  constructor( props, context ) {
    super( props, context );

    this.handleSubmit = this.handleSubmit.bind( this );
  }
  handleSubmit( event ) {
    event.preventDefault();
    this.props.appendChatMessage( this.nameInput.value, this.messageInput.value );
    this.nameInput.value = '';
    this.messageInput.value = '';
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               ref={name => this.nameInput = name}
               placeholder="Name" />
        <input type="text"
               ref={message => this.messageInput = message}
               placeholder="Message" />
        <input type="submit" value="Send" />
      </form>
    );
  }
}

class Message extends React.Component {
  render() {
    let now = new Date( this.props.timestamp );
    let hhmmss = now.toISOString().substr(11, 8);
    return (
      <div className="message">
        <span className="message-time">{hhmmss}</span>&nbsp;
        <strong className="message-owner">{this.props.owner}</strong>&nbsp;
        <span className="message-text">{this.props.text}</span>
      </div>
    );
  }
}

class MessageList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.messages.map( message =>
            <Message timestamp={message.timestamp}
                     owner={message.owner}
                     text={message.text}
                     key={message.id} />
          )
        }
      </div>
    );
  }
}

class Chatbox extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.state = {
      messages: []
    };

    this.appendChatMessage = this.appendChatMessage.bind( this );
    this.clearMessages = this.clearMessages.bind( this );
  }
  appendChatMessage( owner, text ) {
    let newMessage = {
      id: this.state.messages.length + 1,
      timestamp: new Date().getTime(),
      owner: owner,
      text: text
    };
    this.setState({ messages: [ ...this.state.messages, newMessage ] });
  }
  clearMessages() {
    this.setState( { messages: [] } );
  }
  render() {
    let isDisabled = this.state.messages.length === 0;
    return (
      <div id="chatbox">
        <MessageList messages={this.state.messages} />
        <PostMessageForm appendChatMessage={this.appendChatMessage} />
        <ClearButton
          clearMessages={this.clearMessages}
          isDisabled={isDisabled} />
      </div>
    );
  }
}


export default Chatbox;