import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';


export default function configureStore (){
  //depends on whether our APP in prod or in dev mode
  if (process.env.NODE_ENV==='production'){
    return createStore(
      rootReducer,
      applyMiddleware(thunkMiddleware)
    )
  }
  else{
    const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({serialize:true}): compose; //serialize:true is nesessary for devtools redux can show eight nabe of our action type Symbol

    const store= createStore(
      rootReducer,
      composeEnhancers(
        applyMiddleware(
        thunkMiddleware,
        logger),
      )   
    );

    if (module.hot) {
      module.hot.accept('../reducers', () => {
        store.replaceReducer(rootReducer)
      })
    }
    return store;
  };

  
 
};
