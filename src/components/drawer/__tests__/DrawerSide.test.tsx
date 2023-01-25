import { render } from "@testing-library/react";
import { Menu } from "../../menu/Menu";
import { MenuItem } from "../../menu/MenuItem";
import { DrawerSide } from "../DrawerSide";

describe("DrawerSide Component", () => {
    it("Renders typical drawer side", () => {
        const { container } = render(
            <DrawerSide>
                <Menu variant="base-200" className="shadow w-52">
                    <MenuItem>Hello</MenuItem>
                </Menu>
            </DrawerSide>
        );
        const el = container.querySelector("div.drawer-side");
        expect(el).toBeInTheDocument();
    });

    it("Respects className prop", () => {
        const { container } = render(
            <DrawerSide className="find-me">
                <Menu variant="base-200" className="shadow w-52">
                    <MenuItem>Hello</MenuItem>
                </Menu>
            </DrawerSide>
        );
        const el = container.querySelector("div.drawer-side");
        expect(el).toHaveClass("find-me");
    });
});
