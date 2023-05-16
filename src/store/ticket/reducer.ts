import { Reducer } from "redux";
import { TicketActionTypes, TicketsState } from "./types";

export const initialState: TicketsState = {
  data: [],
  errors: undefined,
  loading: false
};

const reducer: Reducer<TicketsState> = (state = initialState, action) => {
  switch (action.type) {
    case TicketActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case TicketActionTypes.FETCH_SUCCESS: {
      console.log("action payload", action.payload);
      return { ...state, loading: false, data: action.payload };
    }
    case TicketActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as TicketReducer };
