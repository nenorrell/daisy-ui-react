// import { HomeIcon } from "@heroicons/react/24/solid";
import { render } from "@testing-library/react";
import ColorMap from "../../../../modules/ColorMap";
import { VariantOptions } from "../../../../modules/testUtils";
import { SimpleCollapse } from "../SimpleCollapse";

describe("SimpleCollapse", ()=>{
    it("Should render as expected", ()=>{
        const component = render(<SimpleCollapse headerContent="test" />);
        expect(component).toMatchSnapshot();
    });

    describe("Variants", ()=>{
        VariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(<SimpleCollapse headerContent={`testing ${variant} variant`} variant={variant} />);
                const headerContainer = component.container.querySelector("div.collapse-title");
                const bodyContainer = component.container.querySelector("div.collapse-body")?.firstChild as HTMLElement;
                const colors = ColorMap.get(variant);

                expect(headerContainer?.classList.contains(colors.bg) && headerContainer?.classList.contains(colors.text)).toBe(true);
                expect(bodyContainer?.classList.contains(colors.bg) && bodyContainer?.classList.contains(colors.text)).toBe(true);
                expect(headerContainer).toMatchSnapshot();
                expect(bodyContainer).toMatchSnapshot();
            });
        });
    });
});
