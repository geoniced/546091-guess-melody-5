import React from "react";
import renderer from "react-test-renderer";
import {GameOverScreen} from "./game-over-screen";

const noop = () => {};

it(`GameOverScreen renders correctly`, () => {
  const tree = renderer
    .create(
        <GameOverScreen
          onReplayButtonClick={noop}
          resetGameAction={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
