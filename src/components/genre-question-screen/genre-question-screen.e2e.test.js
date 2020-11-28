import React from "react";
import {configure, shallow} from "enzyme";
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
