import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component{
  state = { 
    counters: [
        {id: 1, value: 4},
        {id: 2, value: 2},
        {id: 3, value: 1},
        {id: 4, value: 0},
    ]
 }

handleIcrement = counter => {
    let counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value ++;
    this.setState({counters});
}
handleDelete = index => {
    let counters = this.state.counters.filter( counter => counter.id !== index);
    this.setState({counters});
}
handleReset = () => {
    let counters = this.state.counters.map(counter => {
        counter.value = 0;
        return counter;
    })

    this.setState({counters});
}
  render() {
    return (
      <React.Fragment>
        <Navbar totalCount={this.state.counters.filter(counter => counter.value > 0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset = {this.handleReset}
            onIncrement = {this.handleIcrement}
            onDelete = {this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
