import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Menu } from "../Menu";
import { VariantOptions } from "../../../modules/testUtils";
import { getTextColor } from "../../../modules/colors";

describe("Menu component", () => {
    describe("Variants", ()=>{
        VariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(
                    <Menu variant={variant}><li>Testing variant {variant}</li></Menu>
                );
                const container = component.container.querySelector("ul.menu");
                expect(container).toHaveClass(`bg-${variant}`, `text-${getTextColor(variant)}-content`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("calls the onClick prop when the element is clicked", () => {
        const onClick = jest.fn();
        const { container } = render(<Menu className="find-me" onClick={onClick}></Menu>);
        const el = container.querySelector("ul.find-me");

        fireEvent.click(el as any);
        expect(onClick).toHaveBeenCalled();
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
        expect(container.firstChild).toHaveClass("menu-horizontal");
    });

    it("should respect isCompact prop", () => {
        const { container } = render(<Menu isCompact><li>Test</li></Menu>);
        expect(container.firstChild).toHaveClass("menu-compact");
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
