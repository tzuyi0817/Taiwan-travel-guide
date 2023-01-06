import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import guideReducer from '@/store/guide';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [],
};

const reducer = combineReducers({
  guide: guideReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistedReducer,
});
