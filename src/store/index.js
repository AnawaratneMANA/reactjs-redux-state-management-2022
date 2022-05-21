// Method is not deprectated.
import {createStore} from 'redux'

const reducerFn = (state={counter:10}, action) => {
    /*
    Always Syncronous
    Should not mutate the original state.
    */
   if (action.type === "INCREMENT"){
       return {counter:state.counter + 1};
   }
   if(action.type === "DECREMENT"){
       return {counter:state.counter - 1};
   }
   if(action.type === "ADD"){
       return {counter: state.counter + action.payload};
   }
    return state;
}
// This is not the reccomended approach for creating store.
const store = createStore(reducerFn);
export default store;

// https://react-redux.js.org/tutorials/quick-start
