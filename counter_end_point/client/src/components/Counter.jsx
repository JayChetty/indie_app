var React = require('react');

var Counter = React.createClass({

  getInitialState: function(){
    return {count: 0}
  },

  incrementCount:function(){
    this.setState({ 
      count: this.state.count + this.props.multiple,
    })
  },

  decrementCount:function(){
    this.setState({ 
      count: this.state.count - this.props.multiple,
    })
  },

  render: function(){
    console.log('rendering!!');
    return(
      <div>
        <h1> {this.props.title} </h1>
        <p> The current count is {this.state.count}</p>
        <p> Moving in multiples of {this.props.multiple} </p>
        <button onClick={this.incrementCount}> Increment </button>
        <button onClick={this.decrementCount}> Decrement </button>
      </div>
    )
  }
});

module.exports = Counter;