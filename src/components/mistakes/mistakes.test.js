import React from "react";
import renderer from "react-test-renderer";
import Mistakes from "./mistakes";

describe(`Mistakes render correctly`, () => {
  it(`Renders count equals zero`, () => {
    const tree = renderer
      .create(
          <Mistakes
            count={0}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Renders count equals one`, () => {
    const tree = renderer
      .create(
          <Mistakes
            count={1}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

