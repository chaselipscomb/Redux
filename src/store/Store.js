import { createStore } from 'redux';

let defaultState = {
    Category: 'Random',
    History: [
        {
            joke: "HAHAHA"
        }
    ]
};

const amount = (state = defaultState, action) => {
    if(action.type==='DARK') {
        return {
            ...state,
            Category: action.data
        }
    } else if(action.type==='MISC') {
        return {
            ...state,
            Category: action.data
        }
    } else if(action.type==='RANDOM') {
            return {
                ...state,
                Category: action.data
            }
    } else if(action.type==='PROGRAMMING') {
        return {
            ...state,
            Category: action.data
        } 
    } else if(action.type==='HISTORY') {
        return {
            ...state,
            History: action.data
        }
    }
    return state;
}

let store = createStore(amount);
store.subscribe(function() {
    console.log('state', store.getState())
});
export default store
