export const INCREMENT_COUNT = 'INCREMENT_COUNT';

export const actionCreators = {
    incrementCount: () => {
      
        return {type: INCREMENT_COUNT}
        

    }
};

const defaultState = {
    count: 1
};

export const reducer = (state, action) => {
    switch(action.type) {
        case INCREMENT_COUNT:
            return Object.assign({}, state, {count: state.count + 1})
        default:
            break;
    }

    return state || defaultState

};