import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

const middlewares = [];
const storeEnhancers = compose(
  applyMiddleware(...middlewares),
);

const initialState = {
  todos: [
    {
      id: 0,
      text: 'First',
      completed: true
    },
    {
      id: 1,
      text: 'Second',
      completed: false
    },
    {
      id: 2,
      text: 'Third',
      completed: true
    }
  ]

}
export default createStore(reducer, initialState, storeEnhancers);