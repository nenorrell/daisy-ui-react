import React from "react";
import { render } from "@testing-library/react";
import { Range } from "../Range";
import { ComponentSizes, NoBaseOrNeutralVariantOptions } from "../../../modules/testUtils";

describe("Checkbox", () => {
    describe("Variants", ()=>{
        NoBaseOrNeutralVariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(<Range min={0} max={100} variant={variant} />);
                const container = component.container.querySelector("input.range");
                expect(container).toHaveClass(`range-${variant}`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    describe("Sizes", ()=>{
        ComponentSizes.forEach(size=>{
            it(`Respects ${size} size`, ()=>{
                const component = render(
                    <Range min={0} max={100} scale={size} />
                );
                const container = component.container.querySelector("input.range");

                expect(container).toHaveClass(`range-${size}`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("Should render with step, min, max props", () => {
        const { container } = render(<Range min={0} max={100} step={25} />);
        expect(container.firstChild).toHaveAttribute("min", "0");
        expect(container.firstChild).toHaveAttribute("max", "100");
        expect(container.firstChild).toHaveAttribute("step", "25");
    });

    it("renders with type checkbox", () => {
        const { container } = render(<Range min={0} max={100} />);
        expect(container.firstChild).toHaveAttribute("type", "range");
    });

    it("applies the className prop", () => {
        const { container } = render(<Range min={0} max={100} className="test-class" />);
        expect(container.firstChild).toHaveClass("test-class");
    });

    it("renders with the Checkbox displayName", () => {
        expect(Range.displayName).toEqual("Range");
    });
});
