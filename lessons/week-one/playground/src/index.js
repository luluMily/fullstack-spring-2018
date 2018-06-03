import React, {Fragment, Component} from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// const Counter = (props) => (
const Counter = ({ title, count, increment }) => (
    <div>
        <h3>{title}</h3>
        <p>You are visitor number {count}</p>
        <button onClick={increment}>Increment</button>
    </div>
)

class App extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        // this.increment = this.increment.bind(this)
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render () {
        return (
            <Fragment>
                <Counter title="counter 1" count={this.state.count} increment={this.increment} />
                <Counter title="counter 2" count={this.state.count} increment={this.increment} />
                <Counter title="counter 3" count={this.state.count} increment={this.increment} />
            </Fragment>
        )
    }
}

render(
    <App />, // what
    document.getElementById('root') //where
);