import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";

export const getCurrency = () => {

  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_POST_PENDING,
    });

    try {
      let urls = [
        "https://api.exchangerate.host/convert?from=UAH&to=USD",
        "https://api.exchangerate.host/convert?from=UAH&to=EUR",
        "https://api.exchangerate.host/convert?from=UAH&to=PLN",
      ];
      let obj: any = { USD: "", EUR: "", PLN: "" };
      let requests = urls.map((url) => fetch(url));
      await Promise.all(requests)
        .then((responses) => responses)
        .then((result) => Promise.all(result.map((a) => a.json())))
        .then((all) => all.forEach((a) => (obj[a.query.to] = a.result)));
      dispatch({
        type: ActionType.GET_POST_SUCCESS,
        payload: obj,
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_POST_FAIL,
        payload: err.message,
      });
    }
  };
};
