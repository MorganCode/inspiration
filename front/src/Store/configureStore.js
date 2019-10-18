import { createStore } from 'redux';
import products from './Reducers/products'

export default createStore(products, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())