import { useDispatch } from "react-redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, Dispatch, AnyAction } from "redux";

import { MainReducer } from "../reducers/index";

const Store = createStore(
  MainReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = Dispatch<AnyAction> &
  ThunkDispatch<RootState, null, AnyAction>;

export const useAppDispatch: () => AppDispatch = useDispatch;
