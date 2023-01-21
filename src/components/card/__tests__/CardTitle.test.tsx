import { render } from "@testing-library/react";
import { CardTitle } from "../CardTitle";

describe("CardTitle Component", () => {
    it("renders", () => {
        const { container } = render(<CardTitle><h2>Test Card</h2></CardTitle>);
        const el = container.firstChild;
        expect(el).toBeInTheDocument();
        expect(el).toHaveClass("card-title");
    });

    it("renders with custom className", () => {
        const { container } = render(<CardTitle className="find-me"><h2>Test Card</h2></CardTitle>);
        const el = container.firstChild;
        expect(el).toBeInTheDocument();
        expect(el).toHaveClass("find-me");
    });

    it("renders with an id", () => {
        const { container } = render(<CardTitle id="find-me"><h2>Test Card</h2></CardTitle>);
        const el = container.querySelector("div#find-me");
        expect(el).toBeInTheDocument();
    });
});
