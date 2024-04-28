import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
// import { devToolsEnhancer } from "@redux-devtools/extension";

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
export const store = configureStore({ reducer: rootReducer });
