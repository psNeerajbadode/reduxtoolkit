import { configureStore } from "@reduxjs/toolkit";
import addReducer from '../redux/Adduserslic';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore,persistReducer } from "redux-persist";
const persistConfig={
  key:'root',
  storage:AsyncStorage
};
export const store = configureStore({
  reducer: {
    UserAdd: addReducer,
  },
});

const persistedReducer =persistReducer(persistConfig);
export const persistor= persistStore(store);