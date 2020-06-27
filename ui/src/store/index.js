import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import reducers from "../reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "lageen",
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["persistorReducer"] // see "Merge Process" section for details.

};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);


export default store;
export const persistor = persistStore(store);
//persistor.purge();
