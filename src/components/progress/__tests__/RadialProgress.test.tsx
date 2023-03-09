import React from "react";
import { render } from "@testing-library/react";
import { RadialProgress } from "../RadialProgress";
import { VariantOptions } from "../../../modules/testUtils";

describe("RadialProgress", () => {
    describe("Variants", ()=>{
        VariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant without fill`, ()=>{
                const component = render(<RadialProgress value={25} variant={variant} />);
                const container = component.container.querySelector("div.radial-progress");
                expect(container).toHaveClass(`text-${variant}`);
                expect(container).not.toHaveClass(`bg-${variant} text-${variant}-content`);
                expect(container).toMatchSnapshot();
            });

            it(`Respects ${variant} variant with fill`, ()=>{
                const component = render(<RadialProgress value={25} variant={variant} fill />);
                const container = component.container.querySelector("div.radial-progress");
                expect(container).toHaveClass(`bg-${variant} text-${variant}-content`);
                expect(container).not.toHaveClass(`text-${variant}`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("renders progress bar with correct value attribute", () => {
        const value = 50;
        const { container } = render(<RadialProgress value={value} />);
        const progress = container.querySelector(".radial-progress") as HTMLElement;
        expect(progress.style.getPropertyValue("--value")).toBe(String(value));
    });

    describe("thickness", () => {
        it("renders progress bar with correct thickness style attribute", () => {
            const { container } = render(<RadialProgress value={50} thickness="10px" />);
            const progress = container.querySelector(".radial-progress") as HTMLElement;
            expect(progress.style.getPropertyValue("--thickness")).toBe("10px");
        });
    });

    describe("size", () => {
        it("renders progress bar with correct size style attribute", () => {
            const { container } = render(<RadialProgress value={50} size={"10px"} />);
            const progress = container.querySelector(".radial-progress") as HTMLElement;
            expect(progress.style.getPropertyValue("--size")).toBe("10px");
        });
    });

    it("renders children when provided", () => {
        const { container } = render(<RadialProgress value={50}>Custom Text</RadialProgress>);
        const progress = container.querySelector(".radial-progress") as HTMLElement;
        expect(progress.textContent).toBe("Custom Text");
    });

    it("renders value as text when children are not provided", () => {
        const value = 50;
        const { container } = render(<RadialProgress value={value} />);
        const progress = container.querySelector(".radial-progress") as HTMLElement;
        expect(progress.textContent).toBe(`${value}%`);
    });

    it("forwards ref to div element", () => {
        const ref = React.createRef<HTMLDivElement>();
        render(<RadialProgress value={50} ref={ref} />);
        expect(ref.current).not.toBeNull();
        expect(ref.current?.tagName).toBe("DIV");
    });

    it("passes additional props to div element", () => {
        const dataTestId = "radial-progress-test-id";
        const { getByTestId } = render(<RadialProgress value={50} data-testid={dataTestId} />);
        expect(getByTestId(dataTestId)).toBeInTheDocument();
    });
});
