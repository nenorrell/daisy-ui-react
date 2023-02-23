import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Select } from "../Select";
import { ComponentSizes, NoBaseOrNeutralVariantOptions } from "../../../modules/testUtils";

describe("Select", () => {
    describe("Variants", ()=>{
        NoBaseOrNeutralVariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(
                    <Select defaultValue="" variant={variant}>
                        <option value="" disabled>Please Choose Something</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </Select>
                );
                const container = component.container.querySelector("select.select");
                expect(container).toHaveClass(`select-${variant}`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    describe("Sizes", ()=>{
        ComponentSizes.forEach(size=>{
            it(`Respects ${size} size`, ()=>{
                const component = render(
                    <Select defaultValue="" scale={size}>
                        <option value="" disabled>Please Choose Something</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </Select>
                );
                const container = component.container.querySelector("select.select");

                expect(container).toHaveClass(`select-${size}`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("renders without crashing", () => {
        render(<Select />);
    });

    it("renders with custom class name", () => {
        const { container } = render(<Select className="custom-class" />);
        expect(container.firstChild).toHaveClass("select custom-class");
    });

    it("renders with children", () => {
        const { container } = render(
            <Select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </Select>
        );
        expect(container.firstChild).toContainHTML("<option value=\"option1\">Option 1</option>");
        expect(container.firstChild).toContainHTML("<option value=\"option2\">Option 2</option>");
    });

    it("applies isBordered class if isBordered prop is true", () => {
        const { container } = render(<Select isBordered />);
        expect(container.firstChild).toHaveClass("select select-bordered");
    });

    it("applies isGhost class if isGhost prop is true", () => {
        const { container } = render(<Select isGhost />);
        expect(container.firstChild).toHaveClass("select select-ghost");
    });

    it("calls onChange callback when option is selected", () => {
        const handleChange = jest.fn();
        const { getByRole } = render(
            <Select onChange={handleChange}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </Select>
        );
        fireEvent.change(getByRole("combobox"), { target: { value: "option1" } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});
