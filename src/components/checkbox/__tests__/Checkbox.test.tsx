import { render, fireEvent } from "@testing-library/react";
import { ComponentSizes, NoBaseOrNeutralVariantOptions } from "../../../modules/testUtils";
import { Checkbox } from "../Checkbox";

describe("Checkbox", () => {
    describe("Variants", ()=>{
        NoBaseOrNeutralVariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(<Checkbox variant={variant} />);
                const container = component.container.querySelector("input.checkbox");
                expect(container).toHaveClass(`checkbox-${variant}`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    describe("Sizes", ()=>{
        ComponentSizes.forEach(size=>{
            it(`Respects ${size} size`, ()=>{
                const component = render(
                    <Checkbox scale={size} />
                );
                const container = component.container.querySelector("input.checkbox");

                expect(container).toHaveClass(`checkbox-${size}`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("renders correctly", () => {
        const { container } = render(<Checkbox />);
        expect(container.firstChild).toHaveClass("checkbox");
    });

    it("forwards props correctly", () => {
        const { container } = render(<Checkbox id="my-checkbox" />);
        const input = container.querySelector("input");
        expect(input).toHaveAttribute("id", "my-checkbox");
    });

    it("has default scale md", () => {
        const { container } = render(<Checkbox />);
        expect(container.firstChild).toHaveClass("checkbox-md");
    });

    it("defaults to unchecked state", () => {
        const { container } = render(<Checkbox />);
        const input = container.querySelector("input");
        expect(input).not.toBeChecked();
    });

    it("can be checked", () => {
        const { container } = render(<Checkbox />);
        const input = container.querySelector("input");
        fireEvent.click(input as HTMLInputElement);
        expect(input).toBeChecked();
    });

    it("has displayName set", () => {
        expect(Checkbox.displayName).toBe("Checkbox");
    });
});
