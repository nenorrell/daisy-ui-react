import { render } from "@testing-library/react";
import * as utility from "../../../modules/utility";
import { Menu } from "../../menu/Menu";
import { MenuItem } from "../../menu/MenuItem";
import { Drawer } from "../Drawer";
import { DrawerContent } from "../DrawerContent";
import { DrawerSide } from "../DrawerSide";
import { DrawerToggle } from "../DrawerToggle";

describe("Drawer Component", () => {
    it("Renders typical drawer", () => {
        const { container } = render(
            <Drawer>
                <DrawerContent>
                    <DrawerToggle>Toggle me</DrawerToggle>
                </DrawerContent>
                <DrawerSide>
                    <Menu variant="base-200" className="shadow w-52">
                        <MenuItem>Hello</MenuItem>
                    </Menu>
                </DrawerSide>
            </Drawer>
        );
        const el = container.querySelector("div.drawer");
        expect(el).toBeInTheDocument();
    });

    it("Should respect className", () => {
        const { container } = render(
            <Drawer className="find-me">
                <DrawerContent>
                    <DrawerToggle>Toggle me</DrawerToggle>
                </DrawerContent>
                <DrawerSide>
                    <Menu variant="base-200" className="shadow w-52">
                        <MenuItem>Hello</MenuItem>
                    </Menu>
                </DrawerSide>
            </Drawer>
        );
        const el = container.querySelector("div.drawer");
        expect(el).toHaveClass("find-me");
    });

    it("Should respect isMobile", () => {
        const { container } = render(
            <Drawer isMobile>
                <DrawerContent>
                    <DrawerToggle>Toggle me</DrawerToggle>
                </DrawerContent>
                <DrawerSide>
                    <Menu variant="base-200" className="shadow w-52">
                        <MenuItem>Hello</MenuItem>
                    </Menu>
                </DrawerSide>
            </Drawer>
        );
        const el = container.querySelector("div.drawer");
        expect(el).toHaveClass("drawer-mobile");
    });

    it("Should respect openRight", () => {
        const { container } = render(
            <Drawer openRight>
                <DrawerContent>
                    <DrawerToggle>Toggle me</DrawerToggle>
                </DrawerContent>
                <DrawerSide>
                    <Menu variant="base-200" className="shadow w-52">
                        <MenuItem>Hello</MenuItem>
                    </Menu>
                </DrawerSide>
            </Drawer>
        );
        const el = container.querySelector("div.drawer");
        expect(el).toHaveClass("drawer-end");
    });

    it("Should set id on checkbox", () => {
        const { container } = render(
            <Drawer>
                <DrawerContent>
                    <DrawerToggle>Toggle me</DrawerToggle>
                </DrawerContent>
            </Drawer>
        );
        const el = container.querySelector("div.drawer")?.firstChild;

        expect(el).toHaveAttribute("id");
    });

    it("Should pass id to checkbox & overlay", () => {
        const { container } = render(
            <Drawer id="test-id">
                <DrawerContent>
                    <DrawerToggle>Toggle me</DrawerToggle>
                </DrawerContent>
                <DrawerSide>
                    <Menu variant="base-200" className="shadow w-52">
                        <MenuItem>Hello</MenuItem>
                    </Menu>
                </DrawerSide>
            </Drawer>
        );

        const checkbox = container.querySelector("div.drawer")?.firstChild;
        const overlay = container.querySelector("label.drawer-overlay");

        expect(checkbox).toHaveAttribute("id", "test-id");
        expect(overlay).toHaveAttribute("for", "test-id");
    });

    it("Should pass id to children", () => {
        const spy = jest.spyOn(utility, "passPropToChildren");

        render(
            <Drawer id="test-id">
                <DrawerContent>
                    <DrawerToggle>Toggle me</DrawerToggle>
                </DrawerContent>
                <DrawerSide>
                    <Menu variant="base-200" className="shadow w-52">
                        <MenuItem>Hello</MenuItem>
                    </Menu>
                </DrawerSide>
            </Drawer>
        );
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
});
