import React from "react";
import renderer from "react-test-renderer";
import {WinScreen} from "./win-screen";

const noop = () => {};

describe(`WinScreen renders correctly`, () => {
  describe(`Renders with 3 questions`, () => {
    it(`With 0 mistakes`, () => {
      const tree = renderer
        .create(
            <WinScreen
              questionsCount={3}
              mistakesCount={0}
              onReplayButtonClick={noop}
              resetGameAction={noop}
            />
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`With 1 mistakes`, () => {
      const tree = renderer
        .create(
            <WinScreen
              questionsCount={3}
              mistakesCount={1}
              onReplayButtonClick={noop}
              resetGameAction={noop}
            />
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe(`Renders with 2 questions`, () => {
    it(`With 0 mistakes`, () => {
      const tree = renderer
        .create(
            <WinScreen
              questionsCount={2}
              mistakesCount={0}
              onReplayButtonClick={noop}
              resetGameAction={noop}
            />
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`With 1 mistakes`, () => {
      const tree = renderer
        .create(
            <WinScreen
              questionsCount={2}
              mistakesCount={1}
              onReplayButtonClick={noop}
              resetGameAction={noop}
            />
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
