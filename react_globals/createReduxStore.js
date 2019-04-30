import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';


//takes creates a redux store using window.Reducers

if (window.Reducers && window.Reducers.length) {
    window.store = createStore(
        combineReducers(Object.assign({}, ...window.Reducers)),
        applyMiddleware(thunkMiddleware)

    )
}

