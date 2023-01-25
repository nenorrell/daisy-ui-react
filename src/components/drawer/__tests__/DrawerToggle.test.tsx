import { render } from "@testing-library/react";
import ColorMap from "../../../modules/ColorMap";
import { BaselessVariantOptions } from "../../../modules/testUtils";
import { DrawerToggle } from "../DrawerToggle";

describe("DrawerToggle Component", () => {
    describe("Variants", ()=>{
        BaselessVariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const DrawerToggleAny = DrawerToggle as any;
                const {container} = render(
                    <DrawerToggleAny variant={variant} drawerId="test-id">Toggle me with {variant}</DrawerToggleAny>
                );
                const el = container.querySelector("label.drawer-button");
                const colors = ColorMap.get(variant);

                expect(el).toHaveClass(colors.btn as string);
                expect(el).toMatchSnapshot();
            });
        });
    });

    it("Should respect className prop", () => {
        const {container} = render(<DrawerToggle className="find-me">Toggle me</DrawerToggle>);
        const el = container.querySelector("label.drawer-button");
        expect(el).toHaveClass("find-me");
    });
});
