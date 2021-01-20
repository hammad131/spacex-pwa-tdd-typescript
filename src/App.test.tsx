import React from 'react';
import App from './App';
import { shallow, ShallowWrapper } from "enzyme";


describe("Render App", () => {
  let AppWrapper: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  beforeEach(() => (AppWrapper = shallow(<App />)));
  it("should render a header", () => {
    expect(AppWrapper.find("header").length).toEqual(1);
  });
  it("should render a nav", () => {
    expect(AppWrapper.find("nav").length).toEqual(1);
  });
  

})