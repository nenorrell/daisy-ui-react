import { render } from "@testing-library/react";
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
});
