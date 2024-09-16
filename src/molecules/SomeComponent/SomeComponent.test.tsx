import { render } from "@testing-library/react";
import { SomeComponent } from "./SomeComponent";

describe("SomeComponent", () => {
  it("should render correctly", () => {
    const { container } = render(<SomeComponent />);
    expect(container).toMatchSnapshot();
  });
});
