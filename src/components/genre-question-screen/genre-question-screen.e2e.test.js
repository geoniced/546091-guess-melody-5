import React from "react";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreQuestionScreen from "./genre-question-screen";

configure({adapter: new Adapter()});

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `path`,
        genre: `rock`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `blues`,
      },
    ],
  },
};

const noop = () => {};

it(`when user answers genre question form is not sent`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();
  const genreQuestion = shallow(
      <GenreQuestionScreen
        onAnswer={onAnswer}
        question={question}
        renderPlayer={noop}
        onChange={noop}
        userAnswers={[false, false, false, false]}
      >
        <React.Fragment />
      </GenreQuestionScreen>
  );

  const form = genreQuestion.find(`form`);
  const formSubmitPrevention = jest.fn();

  form.simulate(`submit`, {
    preventDefault: formSubmitPrevention,
  });

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSubmitPrevention).toHaveBeenCalledTimes(1);
});

it(`user answer passed to the callback is consistent with "userAnswer" prop`, () => {
  const {question} = mock;
  const onAnswer = jest.fn((...args) => [...args]);
  const userAnswer = [false, false, false, false];

  const genreQuestion = mount(
      <GenreQuestionScreen
        onAnswer={onAnswer}
        question={question}
        renderPlayer={noop}
        onChange={noop}
        userAnswers={userAnswer}
      >
        <React.Fragment />
      </GenreQuestionScreen>
  );

  const form = genreQuestion.find(`form`);
  const inputTwo = genreQuestion.find(`input`).at(1);

  inputTwo.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toEqual(void 0);

  const checkedInputs = genreQuestion.find(`input`).map((it) => it.prop(`checked`));
  expect(checkedInputs).toEqual(userAnswer);
});
