// import thunk from 'redux-thunk'
import { createStore } from 'redux'
// import RootReducer from './redux/reducers/RootReducer'

// const initialState = {}
// const middlewares = [thunk]
// let devtools = (x) => x

// if (
//     process.env.NODE_ENV !== 'production' &&
//     process.browser &&
//     window.__REDUX_DEVTOOLS_EXTENSION__
// ) {
//     devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
// }

// const store = createStore(
//     RootReducer,
//     initialState,
//     compose(applyMiddleware(...middlewares), devtools)
// )

// export default store

const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
