import React from "react";
import renderer from "react-test-renderer";
import AudioPlayer from "./audio-player";

const noop = () => {};

it(`AudioPlayer renders correctly`, () => {
  const tree = renderer
    .create(
        <AudioPlayer
          isPlaying={false}
          isLoading={true}
          onPlayButtonClick={noop}
          src={``}
        >
          <audio />
        </AudioPlayer>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
