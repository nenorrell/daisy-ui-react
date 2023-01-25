import { render } from "@testing-library/react";
import * as utility from "../../../modules/utility";
import { DrawerContent } from "../DrawerContent";
import { DrawerToggle } from "../DrawerToggle";

describe("DrawerContent Component", () => {
    it("Should respect className prop", () => {
        const {container} = render(
            <DrawerContent className="find-me">
                <DrawerToggle>Toggle me</DrawerToggle>
            </DrawerContent>
        );
        const el = container.querySelector("div.drawer-content");
        expect(el).toHaveClass("find-me");
    });

    it("Should pass id to children", () => {
        const spy = jest.spyOn(utility, "passPropToChildren");

        render(
            <DrawerContent>
                <DrawerToggle>Toggle me</DrawerToggle>
            </DrawerContent>
        );
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
});
