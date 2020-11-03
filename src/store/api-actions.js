import {AuthorizationStatus} from "../const";
import {loadQuestions, requireAuthorization} from "./actions";

export const fetchQuestionList = () => (dispatch, _getState, api) => (
  api.get(`/questions`)
    .then(({data}) => dispatch(loadQuestions(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);
