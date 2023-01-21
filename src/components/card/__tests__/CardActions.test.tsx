import { render } from "@testing-library/react";
import { Button } from "../../buttons/Button";
import { CardActions } from "../CardActions";

describe("CardActions component", () => {
    it("renders", () => {
        const { container } = render(
            <CardActions>
                <Button>Test Button</Button>
            </CardActions>
        );
        const el = container.firstChild;
        expect(el).toBeInTheDocument();
        expect(el).toHaveClass("card-actions");
    });

    it("renders with custom className", () => {
        const { container } = render(
            <CardActions className="find-me">
                <Button>Test Button</Button>
            </CardActions>
        );
        const el = container.firstChild;
        expect(el).toBeInTheDocument();
        expect(el).toHaveClass("find-me");
    });

    it("renders with an id", () => {
        const { container } = render(
            <CardActions id="find-me">
                <Button>Test Button</Button>
            </CardActions>
        );
        const el = container.querySelector("div#find-me");
        expect(el).toBeInTheDocument();
    });
});
