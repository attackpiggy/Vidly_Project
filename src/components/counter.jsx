import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {

 state={
   count:0,
   //tags:['tag1','tag2','tag3']
 }
 handleIncrement=(product)=>{
  
   this.setState({count: this.state.count+1 })
 }
 doHandleIncrement=()=>{
   this.handleIncrement({id:1})
 }

    render() {
      console.log("props", this.props);
      const { counter, onIncrement, onDecrement, onDelete } = this.props;
      return (
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div> 
          <div className="col">
            <button
              onClick={this.doHandleIncrement}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
            <button
              onClick={() => onDecrement(counter)}
              className="btn btn-secondary btn-sm m-2"
              disabled={counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              onClick={() => onDelete(counter.id)}
              className="bnt btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        </div>
      );
    }
   
    getBadgeClasses() {
      let classes = "badge m-2 badge-";
      classes += this.state.count === 0 ? "warning" : "primary";
      return classes;
    }
  
    formatCount() {
      const { value } = this.props.counter;
      return value === 0 ? "Zero" : value;
    }

  }
  
export default Counter;