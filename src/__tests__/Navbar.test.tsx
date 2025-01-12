import Navbar from "@/components/Navbar";
import { render, screen } from "@testing-library/react";

describe("Navbar", () => {
  test("should render the 'GamerShop' link", () => {
    render(<Navbar />);

    const linkElement = screen.getByText("GamerShop");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest("a")).toHaveAttribute("href", "/");
  });

  test("should render the shopping cart icon", () => {
    render(<Navbar />);

    const cartIcon = screen.getByAltText("shopping icon");
    expect(cartIcon).toBeInTheDocument();
    expect(cartIcon.getAttribute("src")).toBe("/assets/icons/shoppingCart.svg");
    expect(cartIcon).toHaveAttribute("width", "24");
    expect(cartIcon).toHaveAttribute("height", "24");
  });

  test("should contain a link to the cart page", () => {
    render(<Navbar />);

    const cartLink = screen.getByRole("link", { name: /shopping icon/i });
    expect(cartLink).toBeInTheDocument();
    expect(cartLink).toHaveAttribute("href", "cart");
  });

  test("should have correct styling", () => {
    render(<Navbar />);

    const navbarContainer = screen.getByTestId("navbar-container");
    expect(navbarContainer).toHaveClass("bg-grey-background");
    expect(navbarContainer).toHaveClass("flex");
    expect(navbarContainer).toHaveClass("justify-between");
    expect(navbarContainer).toHaveClass("px-6");
    expect(navbarContainer).toHaveClass("py-5");
    expect(navbarContainer).toHaveClass("sm:px-6");
    expect(navbarContainer).toHaveClass("lg:px-32");
    expect(navbarContainer).toHaveClass("text-2xl");
    expect(navbarContainer).toHaveClass("font-bold");
    expect(navbarContainer).toHaveClass("text-grey-subtext");
  });
});
