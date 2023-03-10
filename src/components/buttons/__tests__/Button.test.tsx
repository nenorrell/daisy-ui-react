import { fireEvent, render } from "@testing-library/react";
import { BaselessVariantOptions, ButtonSizes } from "../../../modules/testUtils";
import { Button } from "../Button";

describe("Button", ()=>{
    describe("Variants", ()=>{
        BaselessVariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(<Button variant={variant}>testing {variant} variant</Button>);
                const container = component.container.querySelector("button.btn");
                expect(container).toHaveClass(`btn-${variant}`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    describe("Sizes", ()=>{
        ButtonSizes.forEach(size=>{
            it(`Respects ${size} size`, ()=>{
                const component = render(
                    <Button size={size}>testing {size} button size</Button>
                );
                const container = component.container.querySelector("button.btn");

                expect(container).toHaveClass(`btn-${size}`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("Respects onClick when passed in", ()=>{
        const stub = jest.fn();
        const component = render(
            <Button onClick={stub}>Testing</Button>
        );
        const container = component.container.querySelector("button.btn");
        fireEvent.click(container as HTMLButtonElement);
        expect(stub).toHaveBeenCalled();
    });

    it("Disables button when passed in", ()=>{
        const component = render(
            <Button isDisabled>Testing</Button>
        );
        const container = component.container.querySelector("button.btn");
        expect(container).toBeDisabled();
    });

    it("Does not disable button when disabled is false", ()=>{
        const component = render(
            <Button isDisabled={false}>Testing</Button>
        );
        const container = component.container.querySelector("button.btn");
        expect(container).not.toBeDisabled();
    });

    it("Renders children", ()=>{
        const component = render(
            <Button><p className="find-me">Some Child</p></Button>
        );
        const container = component.container.querySelector("p.find-me");
        expect(container).toBeInTheDocument();
    });

    it("applies ghost class", () => {
        const { container } = render(<Button isGhost={true} />);
        const button = container.firstChild;

        expect(button).toHaveClass("btn-ghost");
    });

    it("applies link class", () => {
        const { container } = render(<Button isLink={true} />);
        const button = container.firstChild;

        expect(button).toHaveClass("btn-link");
    });

    it("applies outline class", () => {
        const { container } = render(<Button isOutline={true} />);
        const button = container.firstChild;

        expect(button).toHaveClass("btn-outline");
    });

    it("applies glass class", () => {
        const { container } = render(<Button isGlass={true} />);
        const button = container.firstChild;

        expect(button).toHaveClass("glass");
    });

    it("applies loading class", () => {
        const { container } = render(<Button isLoading={true} />);
        const button = container.firstChild;

        expect(button).toHaveClass("loading");
    });

    it("applies no-animation class", () => {
        const { container } = render(<Button noAnimation={true} />);
        const button = container.firstChild;

        expect(button).toHaveClass("no-animation");
    });

    it("applies circle shape class", () => {
        const { container } = render(<Button shape="circle" />);
        const button = container.firstChild;

        expect(button).toHaveClass("btn-circle");
    });

    it("applies square shape class", () => {
        const { container } = render(<Button shape="square" />);
        const button = container.firstChild;

        expect(button).toHaveClass("btn-square");
    });

    it("applies isActive class", () => {
        const { container } = render(<Button isActive />);
        const button = container.firstChild;

        expect(button).toHaveClass("btn-active");
    });
});
