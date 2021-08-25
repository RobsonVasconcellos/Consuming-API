import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import NavItem from "../NavItem";

describe("NavItem", () => {
  it("handles click events", () => {
    const onClick = jest.fn();
    render(<NavItem onClick={onClick}>Click Me</NavItem>);
    fireEvent.click(screen.getByText("Click Me"));
    expect(onClick).toHaveBeenCalled();
  });

  it("renders selected nav item", () => {
    const onClick = jest.fn();

    render(
      <NavItem onClick={onClick} selected={true}>
        Click Me
      </NavItem>
    );

    expect(screen.getByText("Click Me")).toHaveAttribute("aria-current");
  });
});
