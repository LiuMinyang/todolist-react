import React, { Component } from 'react';

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
        this.delete = this.delete.bind(this);
      }

      //调用父组件方法进行传值index达到删除功能
      delete(){
        this.props.handleDelete(this.props.index);
      }

  render() { 
    return (
     <div onClick={this.delete}>{this.props.item}</div>
    );
  }
}

export default Item;
