import { createStore } from 'redux'
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
