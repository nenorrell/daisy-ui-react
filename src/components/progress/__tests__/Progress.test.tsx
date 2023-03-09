import React from "react";
import { render } from "@testing-library/react";
import { Progress } from "../Progress";
import { NoBaseOrNeutralVariantOptions } from "../../../modules/testUtils";

describe("Progress", () => {
    describe("Variants", ()=>{
        NoBaseOrNeutralVariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(<Progress value={25} max={100} variant={variant} />);
                const container = component.container.querySelector("progress.progress");
                expect(container).toHaveClass(`progress-${variant}`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("renders progress bar with correct max and value attributes", () => {
        const max = 100;
        const value = 50;

        const {container} = render(<Progress max={max} value={value} />);

        const el :HTMLProgressElement = container.querySelector("progress.progress") as any;
        expect(el.max).toBe(max);
        expect(el.value).toBe(value);
    });


    it("forwards ref to progress element", () => {
        const ref = { current: null };

        render(<Progress max={100} value={50} ref={ref} />);
        expect(ref.current).not.toBeNull();
        expect((ref as any).current instanceof HTMLProgressElement).toBe(true);
    });

    it("passes additional props to progress element", () => {
        const className = "custom-class";
        const {container} = render(<Progress max={100} value={50} className={className} data-testid="progress" />);

        const el :HTMLProgressElement = container.querySelector("progress.progress") as any;
        expect(el.classList).toContain(className);
    });
});
