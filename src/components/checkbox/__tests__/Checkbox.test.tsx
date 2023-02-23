import React from "react";
import { render } from "@testing-library/react";
import { Checkbox } from "../Checkbox";
import { ComponentSizes, NoBaseOrNeutralVariantOptions } from "../../../modules/testUtils";

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

    it("renders with type \"checkbox\"", () => {
        const { container } = render(<Checkbox />);
        expect(container.firstChild).toHaveAttribute("type", "checkbox");
    });

    it("applies the className prop", () => {
        const { container } = render(<Checkbox className="test-class" />);
        expect(container.firstChild).toHaveClass("test-class");
    });

    it("renders with the Checkbox displayName", () => {
        expect(Checkbox.displayName).toEqual("Checkbox");
    });
});
