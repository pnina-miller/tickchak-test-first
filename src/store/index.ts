import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { History } from "history";

import { TicketReducer } from "./ticket/reducer";
import { TicketsState } from "./ticket/types";

// import cartSaga from "./cart/sagas";
import { cartReducer } from "./cart/reducer";
import { cartState } from "./cart/types";
import { RouterState } from "connected-react-router";

export interface ApplicationState {
  cart: cartState;
  tickets: TicketsState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    cart: cartReducer,
    tickets: TicketReducer,
    router: connectRouter(history)
  });
