import addComponentToWindow from "~/react_globals/addComponentToWindow";
import { wrapComponentInRedux } from "~/react_globals/wrapComponentInRedux";
import * as ReduxCounterState from "./counter.state";
import { Component } from 'react'

class ReduxCounterReader extends Component {

    constructor(props) {
        
        super(props)
        
        /*
            this.props =  {
                text_from_django: 'react_reader_text', <== this is from django context
                count: 1 <=== this is from redux, see redux_counter.state.jsx
            }

        */
    }

    render() {
        
        return <div>
            <h1>Displaying Redux Store counter.count: <span id="redux_counter_display">{this.props.count}</span></h1>
            <h1>Text From Django: {this.props.text_from_django} </h1>
        </div>
    }
}

addComponentToWindow(
    wrapComponentInRedux(
        ReduxCounterReader,
        'counter', /*  <=== the key that is used to map redux state e.g.
                state = {
                    counter: { count: 1 },
                    somethingElse: { someOtherProp: 1 }
                }
            
            this will assign state.counter to the component's props so it can access
            this.props.count == 1 
        
        */
        ReduxCounterState.reducer,
        ReduxCounterState.actionCreators

    ),
    'display' // <=== this is the key that is used to assign this component to window.Component['ReduxCountReader'] = ReduxCountReader
)