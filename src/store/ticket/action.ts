import { TicketActionTypes } from "./types";

import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { ApplicationState } from "../index";
import inventory from "../../mockdata";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;


export const fetchRequest: AppThunk = (allSearchParams) => {
  return (dispatch) => {
    dispatch({ type: TicketActionTypes.FETCH_REQUEST });
    const formData = new FormData();
    formData.append('limit','10');
    formData.append('offset','0');
    fetch('https://tickchak.co.il/ajax/api/exercise_get_tickets', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then((data) => {
        dispatch({ type: TicketActionTypes.FETCH_SUCCESS, payload: data.tickets });
      })
      .catch((err) => {
        dispatch({ type: TicketActionTypes.FETCH_ERROR, err })
      });
  }
}
