import { Component } from "react";



export default class Counter extends Component {


    state = {
        number: this.props.initialValue ?? 0,
        step: this.props.step ?? 1
    }

    inc = () => {
        console.log(this.state.step)
        this.setState({
            number: this.state.number + this.state.step
        })
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.step
        })
    }

    render() {
        return (
            <div>
                <h1>Contador (usando classe)</h1>
                <h2>{this.props.initialValue}</h2>
                <h3>{this.state.number}</h3>
                <input type="number" min={1} max={1000} 
                    value={this.state.step}
                    onChange={e => this.setState({step: +e.target.value})}
                >
                </input>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }

}