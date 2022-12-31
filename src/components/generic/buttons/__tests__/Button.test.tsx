// import { HomeIcon } from "@heroicons/react/24/solid";
import { fireEvent, render } from "@testing-library/react";
import ColorMap from "../../../../modules/ColorMap";
import { BaselessVariantOptions, ButtonSizes } from "../../../../modules/testUtils";
import { getButtonSize } from "../../../../modules/utility";
import { Button } from "../Button";

describe("SimpleCollapse", ()=>{
    describe("Variants", ()=>{
        BaselessVariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(<Button buttonText={`testing ${variant} variant`} variant={variant} />);
                const container = component.container.querySelector("button.btn");
                const colors = ColorMap.get(variant);

                expect(container?.classList.contains(colors.btn as any)).toBe(true);
                expect(container).toMatchSnapshot();
            });
        });
    });

    describe("Sizes", ()=>{
        ButtonSizes.forEach(size=>{
            it(`Respects ${size} size`, ()=>{
                const component = render(<Button buttonText={`testing ${size} button size`} size={size} />);
                const container = component.container.querySelector("button.btn");
                const sizing = getButtonSize(size);

                expect(container?.classList.contains(sizing)).toBe(true);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("Respects onClick when passed in", ()=>{
        const stub = jest.fn();
        const component = render(
            <Button
                buttonText="testing"
                onClick={stub}
            />
        );
        const container = component.container.querySelector("button.btn");
        fireEvent.click(container as HTMLButtonElement);
        expect(stub).toHaveBeenCalled();
    });

    it("Renders buttonText instead of children when both are present", ()=>{
        const component = render(
            <Button
                buttonText="testing"
            ><p className="find-me">Some Child</p></Button>
        );
        const container = component.container.querySelector("button.btn");
        expect(container?.firstChild?.nodeValue).toEqual("testing");

        const child = component.container.querySelector("p.find-me");
        expect(child).not.toBeInTheDocument();
    });

    it("Renders children", ()=>{
        const component = render(
            <Button><p className="find-me">Some Child</p></Button>
        );
        const container = component.container.querySelector("p.find-me");
        expect(container).toBeInTheDocument();
    });
});
