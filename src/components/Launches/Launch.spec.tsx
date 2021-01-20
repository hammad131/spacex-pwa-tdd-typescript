import React from 'react';
import { shallow, ShallowWrapper, ReactWrapper } from "enzyme";
import OutlineCard from "./Launch";

describe("Render App", () => {
  let AppWrapper: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  AppWrapper = shallow(
    <OutlineCard
      flightNumber={7}
      mission="COTS 1"
      launchDate="2010-12-08T15:43:00.000Z"
      launchSuccess={true}
    />
  );

  it("should render 1 div", () => {
    expect(AppWrapper.find("div").length).toEqual(1);
  });
  it("should render a div", () => {
    expect(AppWrapper.find("span").length).toBeGreaterThanOrEqual(1);
  });
})