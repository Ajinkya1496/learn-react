import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
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
        <div>
            <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {this.state.counters.map(counter =>
            <Counter
            key={counter.id}
            onIncrement={() => this.handleIcrement(counter)}
            onDelete={()=>this.handleDelete(counter.id)}
            counter = {counter}/>
            )}
        </div>
        );
    }
}
 
export default Counters;