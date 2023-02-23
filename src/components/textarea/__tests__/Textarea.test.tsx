import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Textarea } from "../Textarea";
import { ComponentSizes, NoBaseOrNeutralVariantOptions } from "../../../modules/testUtils";

describe("Textarea", () => {
    describe("Variants", ()=>{
        NoBaseOrNeutralVariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(<Textarea variant={variant} />);
                const container = component.container.querySelector("textarea.textarea");
                expect(container).toHaveClass(`textarea-${variant}`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    describe("Sizes", ()=>{
        ComponentSizes.forEach(size=>{
            it(`Respects ${size} size`, ()=>{
                const component = render(
                    <Textarea scale={size} />
                );
                const container = component.container.querySelector("textarea.textarea");

                expect(container).toHaveClass(`textarea-${size}`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("renders without errors", () => {
        const { getByRole } = render(<Textarea />);
        expect(getByRole("textbox")).toBeInTheDocument();
    });

    it("renders with additional className", () => {
        const { getByRole } = render(<Textarea className="test-class" />);
        expect(getByRole("textbox")).toHaveClass("test-class");
    });

    it("renders with isBordered", () => {
        const { getByRole } = render(<Textarea isBordered />);
        expect(getByRole("textbox")).toHaveClass("textarea-bordered");
    });

    it("renders with isGhost", () => {
        const { getByRole } = render(<Textarea isGhost />);
        expect(getByRole("textbox")).toHaveClass("textarea-ghost");
    });

    it("passes onChange handler to textarea", () => {
        const handleChange = jest.fn();
        const { getByRole } = render(<Textarea onChange={handleChange} />);
        userEvent.type(getByRole("textbox"), "Hello");
        expect(handleChange).toHaveBeenCalledTimes(5);
    });

    it("passes ref to textarea", () => {
        const ref = React.createRef<HTMLTextAreaElement>();
        const { getByRole } = render(<Textarea ref={ref} />);
        expect(getByRole("textbox")).toBe(ref.current);
    });
});
