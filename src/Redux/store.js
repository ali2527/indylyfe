  
import { createStore,applyMiddleware  } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import Reducer from './reducer'


const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig,Reducer)

let store = createStore(persistedReducer,applyMiddleware(thunk))
let persistor = persistStore(store)

export  {store,persistor};