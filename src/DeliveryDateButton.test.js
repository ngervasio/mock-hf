import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DeliveryDateButton from "./DeliveryDateButton";

describe("weekly nav", () => {
  it("should contain a button", () => {
    render(<DeliveryDateButton />);
    expect(screen.getByRole("button")).toHaveStyle("background-color: #fff");
  });
  it("should change color when clicked", async () => {
    render(<DeliveryDateButton buttonType={"secondary"} />);

    userEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveStyle("background-color: #eee");
  });
});
