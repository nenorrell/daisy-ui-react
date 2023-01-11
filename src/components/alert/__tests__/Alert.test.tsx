import { fireEvent, render } from "@testing-library/react";
import ColorMap from "../../../modules/ColorMap";
import { StatusVariantOptions } from "../../../modules/testUtils";
import { Alert } from "../Alert";

describe("Alert", ()=>{
    describe("Variants", ()=>{
        StatusVariantOptions.forEach(variant =>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(
                    <Alert variant={variant}>
                        <p>Hello</p>
                    </Alert>
                );
                const container = component.container.querySelector("div.alert");
                const colors = ColorMap.get(variant);

                expect(container?.classList.contains(colors.alert as any)).toBe(true);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("Respects onClick when passed in", ()=>{
        const stub = jest.fn();
        const component = render(
            <Alert onClick={stub}>
                <p>Hello</p>
            </Alert>
        );
        const container = component.container.querySelector("div.alert");
        fireEvent.click(container as HTMLDivElement);
        expect(stub).toHaveBeenCalled();
    });

    it("Renders children", ()=>{
        const component = render(
            <Alert><p className="find-me">Some Child</p></Alert>
        );
        const container = component.container.querySelector("p.find-me");
        expect(container).toBeInTheDocument();
    });
});
