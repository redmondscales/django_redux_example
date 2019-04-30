import { Component } from 'react'
import { Provider, connect } from 'react-redux'

export const wrapComponentInRedux = (ComponentToWrap, propKeySelector, reducers, actionCreators) => {

    if (!window.Reducers) {
        window.Reducers = []
    }

    window.Reducers.push({ [propKeySelector]: reducers })

    const ComponentConnectedToRedux = connect(
        (state) => state[propKeySelector],
        actionCreators
    )(ComponentToWrap)

    return class ReduxWrappedComponent extends Component {
        render() {
            return <Provider store={window.store}>
                <ComponentConnectedToRedux {...this.props} />
            </Provider>
        }
    }
}