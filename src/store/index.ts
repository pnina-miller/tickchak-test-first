import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { History } from "history";

import { TicketReducer } from "./ticket/reducer";
import { TicketsState } from "./ticket/types";

// import cartSaga from "./cart/sagas";
import { RouterState } from "connected-react-router";

export interface ApplicationState {
  tickets: TicketsState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    tickets: TicketReducer,
    router: connectRouter(history)
  });
