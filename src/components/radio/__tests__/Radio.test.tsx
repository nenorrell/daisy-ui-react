import React from "react";
import { render } from "@testing-library/react";
import { Radio } from "../Radio";
import { ComponentSizes, NoBaseOrNeutralVariantOptions } from "../../../modules/testUtils";

describe("Radio", () => {
    describe("Variants", ()=>{
        NoBaseOrNeutralVariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(<Radio variant={variant} />);
                const container = component.container.querySelector("input.radio");
                expect(container).toHaveClass(`radio-${variant}`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    describe("Sizes", ()=>{
        ComponentSizes.forEach(size=>{
            it(`Respects ${size} size`, ()=>{
                const component = render(
                    <Radio scale={size} />
                );
                const container = component.container.querySelector("input.radio");

                expect(container).toHaveClass(`radio-${size}`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("renders with type radio", () => {
        const { container } = render(<Radio />);
        expect(container.firstChild).toHaveAttribute("type", "radio");
    });

    it("renders with name", () => {
        const name = "some-name";
        const { container } = render(<Radio name={name} />);
        const radio = container.querySelector("input[type='radio']");
        expect(radio).toHaveAttribute("name", name);
    });

    it("applies the className prop", () => {
        const { container } = render(<Radio className="test-class" />);
        expect(container.firstChild).toHaveClass("test-class");
    });

    it("Sets Radio displayName", () => {
        expect(Radio.displayName).toEqual("Radio");
    });
});
