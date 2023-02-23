import React from "react";
import { render } from "@testing-library/react";
import { FileInput } from "../FileInput";
import { ComponentSizes, NoBaseOrNeutralVariantOptions } from "../../../modules/testUtils";

describe("FileInput", () => {
    describe("Variants", ()=>{
        NoBaseOrNeutralVariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(<FileInput variant={variant} />);
                const container = component.container.querySelector("input.file-input");
                expect(container).toHaveClass(`file-input-${variant}`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    describe("Sizes", ()=>{
        ComponentSizes.forEach(size=>{
            it(`Respects ${size} size`, ()=>{
                const component = render(
                    <FileInput scale={size} />
                );
                const container = component.container.querySelector("input.file-input");

                expect(container).toHaveClass(`file-input-${size}`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("renders with type file", () => {
        const { container } = render(<FileInput />);
        expect(container.firstChild).toHaveAttribute("type", "file");
    });

    it("applies the className prop", () => {
        const { container } = render(<FileInput className="test-class" />);
        expect(container.firstChild).toHaveClass("test-class");
    });

    it("Contains the displayName", () => {
        expect(FileInput.displayName).toEqual("FileInput");
    });

    it("applies the isBordered prop to the className", () => {
        const { container } = render(<FileInput isBordered />);
        expect(container.firstChild).toHaveClass("file-input-bordered");
    });

    it("applies the isGhost prop to the className", () => {
        const { container } = render(<FileInput isGhost />);
        expect(container.firstChild).toHaveClass("file-input-ghost");
    });
});
