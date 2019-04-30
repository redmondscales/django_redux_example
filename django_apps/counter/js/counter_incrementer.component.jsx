import addComponentToWindow from "~/react_globals/addComponentToWindow";
import { wrapComponentInRedux } from "~/react_globals/wrapComponentInRedux";
import * as ReduxCounterState from "./counter.state";
import { Component } from 'react'

class ReduxCounter extends Component {
    
    render() {
        return <div>
            <h1>Text From Django: {this.props.text_from_django} </h1>
            <h2>Increments Redux Store counter.count</h2>
            <button id="react_incrementer_button" onClick={() => this.props.incrementCount()}>Increment</button>
        </div>
    }
}

addComponentToWindow(
    wrapComponentInRedux(
        ReduxCounter,
        'counter',
        ReduxCounterState.reducer,
        ReduxCounterState.actionCreators

    ),
    'counter'
)