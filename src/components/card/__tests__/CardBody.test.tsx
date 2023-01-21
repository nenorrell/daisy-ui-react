import { render } from "@testing-library/react";
import { CardBody } from "../CardBody";
import { CardTitle } from "../CardTitle";

describe("CardBody component", () => {
    it("renders", () => {
        const { container } = render(
            <CardBody>
                <CardTitle><h2>Test Card</h2></CardTitle>
                <p>Test body</p>
            </CardBody>
        );
        const el = container.firstChild;
        expect(el).toBeInTheDocument();
        expect(el).toHaveClass("card-body");
    });

    it("renders with custom className", () => {
        const { container } = render(
            <CardBody className="find-me">
                <CardTitle><h2>Test Card</h2></CardTitle>
                <p>Test body</p>
            </CardBody>
        );
        const el = container.firstChild;
        expect(el).toBeInTheDocument();
        expect(el).toHaveClass("find-me");
    });

    it("renders with an id", () => {
        const { container } = render(
            <CardBody id="find-me">
                <CardTitle><h2>Test Card</h2></CardTitle>
                <p>Test body</p>
            </CardBody>
        );
        const el = container.querySelector("div#find-me");
        expect(el).toBeInTheDocument();
    });
});
