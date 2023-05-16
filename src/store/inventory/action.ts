import { InventoryActionTypes } from "./types";

import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { ApplicationState } from "../index";
import inventory from "../../mockdata";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;


export const fetchRequest: AppThunk = (allSearchParams) => {
  return (dispatch) => {
    dispatch({ type: InventoryActionTypes.FETCH_REQUEST });
    const formData = new FormData();
    formData.append('limit','10');
    formData.append('offset','0');
    fetch('https://tickchak.co.il/ajax/api/exercise_get_tickets', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then((data) => {
        console.log("GetFullDynamicResult", data)
        dispatch({ type: InventoryActionTypes.FETCH_SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: InventoryActionTypes.FETCH_ERROR, err })
      });
  }
}

// export const fetchRequest: AppThunk = () => {
//   return (dispatch: Dispatch): Action => {
//     try {
//       return dispatch({
//         type: InventoryActionTypes.FETCH_SUCCESS,
//         payload: inventory
//       });
//     } catch (e) {
//       return dispatch({
//         type: InventoryActionTypes.FETCH_ERROR
//       });
//     }
//   };
// };
