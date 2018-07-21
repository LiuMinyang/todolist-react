import React, { Component } from 'react';
import Item from './components/item'

class Todolist extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue:'',
      list:[]
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // ---添加待办事件
  handleClick(){
    let list = [...this.state.list,this.state.inputValue];
    //清空input value，同时jsx中value={this.state.inputValue}使input框的内容与inputvalue绑定以做到清空input框的值的功能
    this.setState({
      list,
      inputValue:'',
    })
  }

  // ---改变inputValue
  handleChange(e){
    let inputValue = e.target.value;
    this.setState({
      inputValue
    })
  }

  handleDelete(index){
    // let list = this.state.list.splice(index,1);
    
    const list = [...this.state.list];
    list.splice(index,1);;
    this.setState({
      list
    })
  }

  render() {
    return (
     <div> 
        <div className="App">
            <input value={this.state.inputValue} type="text" onChange ={this.handleChange}/>
            <button onClick = {this.handleClick}>提交</button>
        </div>
        <ul >
          {
            this.state.list.map((item,index)=>{
                return <Item handleDelete={this.handleDelete} item={item} index={index} key={index}></Item>
            })
          }
            
        </ul>
      </div>
    );
  }
}

export default Todolist;
