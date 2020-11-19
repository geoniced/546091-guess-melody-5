import {gameProcess} from "./game-process";
import {ActionType} from "../../actions";

it(`reducer without additional parameters should return initial state`, () => {
  expect(gameProcess(void 0, {})).toEqual({
    step: 0,
    mistakes: 0,
  });
});

it(`reducer should increment current step by any given value`, () => {
  expect(gameProcess({
    step: 0,
    mistakes: 0,
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }))
    .toEqual({
      step: 1,
      mistakes: 0,
    });

  expect(gameProcess({
    step: 0,
    mistakes: 0,
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 0,
  }))
    .toEqual({
      step: 0,
      mistakes: 0,
    });
});

it(`reducer should increment mistakes by any given value`, () => {
  expect(gameProcess({
    step: 0,
    mistakes: 0,
  }, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1,
  }))
    .toEqual({
      step: 0,
      mistakes: 1,
    });

  expect(gameProcess({
    step: 0,
    mistakes: 0,
  }, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 0,
  }))
    .toEqual({
      step: 0,
      mistakes: 0,
    });
});

it(`reducer should return its default/initial state when the reset action has been called`, () => {
  expect(gameProcess({
    step: 5,
    mistakes: 1,
  }, {
    type: ActionType.RESET_GAME,
    payload: null,
  }))
    .toEqual({
      step: 0,
      mistakes: 0,
    });

  expect(gameProcess({
    step: 0,
    mistakes: 0,
  }, {
    type: ActionType.RESET_GAME,
    payload: null,
  }))
    .toEqual({
      step: 0,
      mistakes: 0,
    });

  expect(gameProcess({
    step: 2,
    mistakes: 0,
  }, {
    type: ActionType.RESET_GAME,
    payload: null,
  }))
    .toEqual({
      step: 0,
      mistakes: 0,
    });
});
