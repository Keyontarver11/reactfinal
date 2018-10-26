import React, { Component } from "react";
export default class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      list: []
    };
  }
  changeUserInput(input) {
    this.setState({
      userInput: input
    });
  }

  addToList(input){
      let listArray = this.state.list;

      listArray.push(input);

      this.setState({
          list: listArray,
          userInput: ''
      })
  }

  deleteFromList(input){
    let listArray = this.state.list;

      listArray.pop(input);

      this.setState({
          list: listArray,
          userInput: ''
  })
}

  render() {
    return (
      <div className="to-do-list-main">
      <div className="header">
      <input className="todo-input"
          onChange={e => this.changeUserInput(e.target.value)}
          value={this.state.userInput}
          type="text"
        />
        <button className="button" onClick= {()=> this.addToList(this.state.userInput)}>Add Todo</button>
        <button className="delete-button" onClick= {()=> this.deleteFromList(this.state.userInput)}>Clear Todos</button>
      </div>
      

       <div className="list-items">
       <ul className="todo-list">
            {this.state.list.map( (val)=> <li className="todos">{val}</li>)}
        </ul>
       </div>
        
      </div>
      
        
    );
  }
}
