import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {user} from "./user";
import {ActionType} from "../../actions";
import {APIRoute, AppRoute, AuthorizationStatus} from "../../../const";
import {checkAuth, login} from "../../api-actions";

const noop = () => {};

const api = createAPI(noop);

it(`reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {}))
    .toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });
});

it(`reducer should update authorizationStatus field to auth`, () => {
  expect(user({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  }))
    .toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });
});

describe(`async operations work correctly`, () => {
  it(`should make a correct api call to GET /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`should make a correct api call to POST /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {login: `test@test.ru`, password: `123456`};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.RESULT,
        });
      });
  });
});

