import React from "react";
import { render } from "@testing-library/react";
import { Menu } from "../Menu";
import { VariantOptions } from "../../../modules/testUtils";
import ColorMap from "../../../modules/ColorMap";

describe("Menu component", () => {
    describe("Variants", ()=>{
        VariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(
                    <Menu variant={variant}><li>Testing variant {variant}</li></Menu>
                );
                const container = component.container.querySelector("ul.menu");
                const colors = ColorMap.get(variant);

                expect(container).toHaveClass(colors.bg as string);
                expect(container).toHaveClass(colors.text as string);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("should render", () => {
        const { container } = render(<Menu><li>Test</li></Menu>);
        expect(container).toBeTruthy();
    });

    it("should have the correct className", () => {
        const { container } = render(<Menu className="test-class"><li>Test</li></Menu>);
        expect(container.firstChild).toHaveClass("test-class");
    });

    it("should have the correct type", () => {
        const { container } = render(<Menu type="horizontal"><li>Test</li></Menu>);
        expect(container.firstChild).toHaveClass("horizontal");
    });

    it("should have the correct tabIndex", () => {
        const { container } = render(<Menu tabIndex={1}><li>Test</li></Menu>);
        expect(container.firstChild).toHaveAttribute("tabindex", "1");
    });

    it("should render children", () => {
        const { container } = render(<Menu><li>Test</li></Menu>);
        expect(container.querySelector("li")).toBeTruthy();
    });
});