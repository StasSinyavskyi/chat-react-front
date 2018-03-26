import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';


export default function configureStore() {
  // depends on whether our APP in prod or in dev mode
  if (process.env.NODE_ENV === 'production') {
    return createStore(
      rootReducer,
      applyMiddleware(thunkMiddleware),
    );
  }

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      // serialize:true is nesessary for devtools redux can show eight nabe of
      // our action type Symbol
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true }) : compose;
  /* eslint-enable no-underscore-dangle */

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(
      thunkMiddleware,
      logger,
    )),
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }
  return store;
}
