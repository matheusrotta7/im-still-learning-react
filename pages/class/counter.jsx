import { Component } from "react";

import Counter from "../../components/Counter"

export default class CounterPage extends Component {

    render() {
        return (
            <div>
                <h1>Teste Classe</h1>
                <Counter initialValue={100} step={37}/>
                <Counter step={100}/>
            </div>
        )
    }
    
}