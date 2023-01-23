import { render } from "@testing-library/react";
import ColorMap from "../../../modules/ColorMap";
import { VariantOptions } from "../../../modules/testUtils";
import { Button } from "../../buttons/Button";
import { Card } from "../Card";
import { CardActions } from "../CardActions";
import { CardBody } from "../CardBody";
import { CardTitle } from "../CardTitle";

describe("Card component", () => {
    describe("Variants", ()=>{
        VariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(
                    <Card variant={variant}>
                        <CardBody>
                            <CardTitle><h2>Testing variant {variant}</h2></CardTitle>
                            <p>Test body</p>
                        </CardBody>
                    </Card>
                );
                const container = component.container.querySelector("div.card");
                const colors = ColorMap.get(variant);

                expect(container).toHaveClass(colors.bg, colors.text);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("renders with default props", () => {
        const { container } = render(
            <Card>
                <CardBody>
                    <CardTitle><h2>Test Card</h2></CardTitle>
                    <p>Test body</p>
                </CardBody>
            </Card>
        );
        const card = container.firstChild;
        expect(card).toBeInTheDocument();
        expect(card).toHaveClass("card card-normal");
    });

    it("renders with custom className", () => {
        const { container } = render(
            <Card className="find-me">
                <CardBody>
                    <CardTitle><h2>Test Card</h2></CardTitle>
                    <p>Test body</p>
                </CardBody>
            </Card>
        );
        const card = container.firstChild;
        expect(card).toBeInTheDocument();
        expect(card).toHaveClass("find-me");
    });

    it("renders with an id", () => {
        const { container } = render(
            <Card id="find-me">
                <CardBody>
                    <CardTitle><h2>Test Card</h2></CardTitle>
                    <p>Test body</p>
                </CardBody>
            </Card>
        );
        const card = container.querySelector("div#find-me");
        expect(card).toBeInTheDocument();
    });

    it("renders with size compact", () => {
        const { container } = render(
            <Card size="compact">
                <CardBody>
                    <CardTitle><h2>Test Card</h2></CardTitle>
                    <p>Test body</p>
                </CardBody>
            </Card>
        );
        const card = container.querySelector("div.card");
        expect(card).toHaveClass("card-compact");
    });

    it("renders isSide prop", () => {
        const { container } = render(
            <Card isSide>
                <CardBody>
                    <CardTitle><h2>Test Card</h2></CardTitle>
                    <p>Test body</p>
                </CardBody>
            </Card>
        );
        const card = container.querySelector("div.card");
        expect(card).toHaveClass("card-side");
    });

    it("renders with imageFull prop", () => {
        const { container } = render(
            <Card imageFull>
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <CardBody>
                    <CardTitle><h2>Test Card</h2></CardTitle>
                    <p>Test body</p>
                </CardBody>
            </Card>
        );
        const card = container.querySelector("div.card");
        expect(card).toHaveClass("image-full");
    });

    it("renders full card", () => {
        const { container } = render(
            <Card>
                <figure className="find-me"><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <CardBody>
                    <CardTitle><h2>Test Card</h2></CardTitle>
                    <p>Test body</p>
                </CardBody>
                <CardActions>
                    <Button>Test Button</Button>
                </CardActions>
            </Card>
        );
        const card = container.querySelector("div.card");
        const cardFigure = card?.querySelector("figure.find-me");
        const cardBody = card?.querySelector("div.card-body");
        const cardTitle = cardBody?.querySelector("div.card-title");
        const cardActions = card?.querySelector("div.card-actions");

        expect(card).toBeInTheDocument();
        expect(cardFigure).toBeInTheDocument();
        expect(cardBody).toBeInTheDocument();
        expect(cardTitle).toBeInTheDocument();
        expect(cardActions).toBeInTheDocument();
    });
});
