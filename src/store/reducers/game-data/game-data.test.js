import MockAdapter from "axios-mock-adapter";
import {APIRoute} from "../../../const";
import {createAPI} from "../../../services/api";
import {ActionType} from "../../actions";
import {fetchQuestionList} from "../../api-actions";
import {gameData} from "./game-data";

const noop = () => {};

const api = createAPI(noop);

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      picture: `https://api.adorable.io/avatars/128/A`,
      artist: `John Snow`,
    }, {
      picture: `https://api.adorable.io/avatars/128/AB`,
      artist: `Jack Daniels`,
    }, {
      picture: `https://api.adorable.io/avatars/128/AC`,
      artist: `Jim Beam`,
    }],
  },
];


it(`reducer without additional parameters should return initial state`, () => {
  expect(gameData(void 0, {})).toEqual({
    questions: [],
  });
});

it(`reducer should update questions when load question action has been dispatched`, () => {
  expect(gameData({
    questions: [],
  }, {
    type: ActionType.LOAD_QUESTIONS,
    payload: questions,
  })).toEqual({
    questions,
  });
});

describe(`async operations work correctly`, () => {
  it(`should make a correct api call to /questions`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = fetchQuestionList();

    apiMock
      .onGet(APIRoute.QUESTIONS)
      .reply(200, [{fake: true}]);

    return questionLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_QUESTIONS,
          payload: [{fake: true}],
        });
      });
  });
});
