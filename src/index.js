import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from  './reducers';
import {fetchMemes,newMeme} from './actions';
import MemeList from './actions/MemeList';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);
store.subscribe(()=>console.log('store', store.getState()))
store.dispatch(fetchMemes());


ReactDOM.render(
    <Provider store={store}>
              {/* <App /> */}
          
              <MemeList/>

    </Provider>
        

     
  , document.getElementById('root'));

