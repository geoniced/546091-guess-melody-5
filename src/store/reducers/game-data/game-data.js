import {extend} from "../../../utils";
import questions from "../../../mocks/questions";
import {ActionType} from "../../actions";

const initialState = {
  questions,
};

const gameData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_QUESTIONS:
      return extend(state, {
        questions: action.payload,
      });
  }

  return state;
};

export {gameData};
