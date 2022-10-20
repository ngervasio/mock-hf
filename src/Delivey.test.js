import { render, screen } from "@testing-library/react";
import DeliveryInfo from "./Delivery";

describe("mealchoice header section", () => {
  it("displays info text", () => {
    render(<DeliveryInfo />);
    expect(screen.getByText("time to cook!")).toBeInTheDocument();
  });

  // should display dilivery status (DELIVERED/ON IT'S WAY)
  // should have link to track delivery
  // TODO: THIS SHOULD MAKE A API CALL TO GET THE STATUS OF DELIVERY

  it("displays a button with text help with delivery", () => {
    render(<DeliveryInfo />);
    expect(screen.getByText(/help with delivery/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveStyle("background-color: #fff");
  });
});
