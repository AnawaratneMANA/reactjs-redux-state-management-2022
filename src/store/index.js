// Method is not deprectated.
import {createStore} from 'redux'

const reducerFn = (state={counter:0}, action) => {
    return state;
}
// This is not the reccomended approach for creating store.
const store = createStore(reducerFn);
export default store;

// https://react-redux.js.org/tutorials/quick-start
