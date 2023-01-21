import { render } from "@testing-library/react";
import { Button } from "../../buttons/Button";
import { MenuItem } from "../../menu/MenuItem";
import { Dropdown } from "../Dropdown";
import { DropdownMenu } from "../DropdownMenu";

describe("Dropdown component", () => {
    test("Should render the button and children", () => {
        const { container } = render(
            <Dropdown>
                <Button className="m-2">Test Dropdown</Button>
                <DropdownMenu className="shadow w-52" variant="base-200">
                    <MenuItem>test item</MenuItem>
                    <MenuItem>test item 2</MenuItem>
                </DropdownMenu>
            </Dropdown>
        );
        expect(container.querySelector("button")).toBeInTheDocument();
        expect(container.querySelector("li")).toBeInTheDocument();
        expect(container.querySelectorAll("li").length).toBe(2);
    });

    describe("Position", ()=>{
        ["left", "right", "bottom", "top"].forEach(position=>{
            it(`Respects ${position} position`, ()=>{
                const component = render(
                    <Dropdown position={position as any}>
                        <Button className="m-2">Test Dropdown position {position}</Button>
                        <DropdownMenu className="shadow w-52" variant="base-200">
                            <MenuItem>Test Title</MenuItem>
                        </DropdownMenu>
                    </Dropdown>
                );
                const container = component.container.querySelector("div.dropdown");
                expect(container).toHaveClass(`dropdown-${position}` as string);
            });
        });
    });

    it("Should add custom class to dropdown wrapper", () => {
        const { container } = render(
            <Dropdown className="custom-class">
                <Button className="m-2">Test Dropdown</Button>
                <DropdownMenu className="shadow w-52" variant="base-200">
                    <MenuItem>Test Title</MenuItem>
                </DropdownMenu>
            </Dropdown>
        );
        expect(container.querySelector("div.dropdown")).toHaveClass("custom-class");
    });

    it("Should set id", () => {
        const { container } = render(
            <Dropdown id="custom-id">
                <Button className="m-2">Test Dropdown</Button>
                <DropdownMenu className="shadow w-52" variant="base-200">
                    <MenuItem>Test Title</MenuItem>
                </DropdownMenu>
            </Dropdown>
        );
        expect(container.querySelector("#custom-id")).toBeInTheDocument();
    });

    it("Should set hover", () => {
        const { container } = render(
            <Dropdown hover>
                <Button className="m-2">Test Dropdown</Button>
                <DropdownMenu className="shadow w-52" variant="base-200">
                    <MenuItem>Test Title</MenuItem>
                </DropdownMenu>
            </Dropdown>
        );
        expect(container.querySelector("div.dropdown")).toHaveClass("dropdown-hover");
    });

    it("Should set isEnd prop", () => {
        const { container } = render(
            <Dropdown isEnd>
                <Button className="m-2">Test Dropdown</Button>
                <DropdownMenu className="shadow w-52" variant="base-200">
                    <MenuItem>Test Title</MenuItem>
                </DropdownMenu>
            </Dropdown>
        );
        expect(container.querySelector("div.dropdown")).toHaveClass("dropdown-end");
    });

    it("Should set isOpen prop", () => {
        const { container } = render(
            <Dropdown isOpen>
                <Button className="m-2">Test Dropdown</Button>
                <DropdownMenu className="shadow w-52" variant="base-200">
                    <MenuItem>Test Title</MenuItem>
                </DropdownMenu>
            </Dropdown>
        );
        expect(container.querySelector("div.dropdown")).toHaveClass("dropdown-open");
    });
});
