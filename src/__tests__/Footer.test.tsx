import Footer from "@/components/Footer";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  test("should render the logo image", () => {
    render(<Footer />);

    const logoImage = screen.getByAltText("logo");
    expect(logoImage).toBeInTheDocument();
    
    expect(logoImage.getAttribute("src")).toMatch(/_next\/image\?url=%2Fassets%2Fimages%2Flogo.png/);
  });

  test("should contain a link to the homepage", () => {
    render(<Footer />);

    const link = screen.getByRole("link", { name: /logo/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });

  test("should have the correct styling", () => {
    render(<Footer />);

    const footerContainer = screen.getByTestId("footer-container");
    expect(footerContainer).toHaveClass("bg-grey-neutral");
    expect(footerContainer).toHaveClass("flex");
    expect(footerContainer).toHaveClass("py-16");
    expect(footerContainer).toHaveClass("justify-center");
  });
});
