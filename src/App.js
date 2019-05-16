import React, {Component} from 'react';
import Child from './Components/Child'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      students: [
        {
          name: 'Rachel',
          favorite_taco: 'Pollo Calle'
        },
        {
          name: 'Collins',
          favorite_taco: 'Chocolate Taco Icecream'
        },
        {
          name: 'Bryan',
          favorite_taco: 'All of the breakfast ones'
        }
      ]
    }

    this.delete=this.delete.bind(this)

  }

  delete(index){
    let array = this.state.students
    array.splice(index, 1)
    this.setState({students: array})
  }

  render(){
    return (
      <div className="App">
        It's working!
        <Child students={this.state.students} delete={this.delete}/>
      </div>
    );
  }
}

export default App;
