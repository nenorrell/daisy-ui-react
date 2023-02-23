import { render, fireEvent } from "@testing-library/react";
import { ComponentSizes, NoBaseOrNeutralVariantOptions } from "../../../modules/testUtils";
import { Toggle } from "../Toggle";

describe("Toggle", () => {
    describe("Variants", ()=>{
        NoBaseOrNeutralVariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(<Toggle variant={variant} />);
                const container = component.container.querySelector("input.toggle");
                expect(container).toHaveClass(`toggle-${variant}`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    describe("Sizes", ()=>{
        ComponentSizes.forEach(size=>{
            it(`Respects ${size} size`, ()=>{
                const component = render(
                    <Toggle scale={size} />
                );
                const container = component.container.querySelector("input.toggle");

                expect(container).toHaveClass(`toggle-${size}`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("renders correctly", () => {
        const { container } = render(<Toggle />);
        expect(container.firstChild).toHaveClass("toggle");
    });

    it("forwards props correctly", () => {
        const { container } = render(<Toggle id="my-toggle" />);
        const input = container.querySelector("input");
        expect(input).toHaveAttribute("id", "my-toggle");
    });

    it("has default scale md", () => {
        const { container } = render(<Toggle />);
        expect(container.firstChild).toHaveClass("toggle-md");
    });

    it("defaults to unchecked state", () => {
        const { container } = render(<Toggle />);
        const input = container.querySelector("input");
        expect(input).not.toBeChecked();
    });

    it("can be checked", () => {
        const { container } = render(<Toggle />);
        const input = container.querySelector("input");
        fireEvent.click(input as HTMLInputElement);
        expect(input).toBeChecked();
    });

    it("has displayName set", () => {
        expect(Toggle.displayName).toBe("Toggle");
    });
});
