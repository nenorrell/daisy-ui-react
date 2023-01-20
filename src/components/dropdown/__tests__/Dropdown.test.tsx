import { render, fireEvent } from "@testing-library/react";
import ColorMap from "../../../modules/ColorMap";
import { VariantOptions } from "../../../modules/testUtils";
import { MenuItem } from "../../menu/MenuItem";
import { Dropdown } from "../Dropdown";

describe("Dropdown component", () => {
    test("Should render the button and children", () => {
        const { container } = render(
            <Dropdown button={<button>Button</button>}>
                <MenuItem>Test1</MenuItem>
                <MenuItem>Test2</MenuItem>
            </Dropdown>
        );
        expect(container.querySelector("button")).toBeInTheDocument();
        expect(container.querySelector("li")).toBeInTheDocument();
        expect(container.querySelectorAll("li").length).toBe(2);
    });

    describe("Variants", ()=>{
        VariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(
                    <Dropdown button={<button>Button</button>} variant={variant}>
                        <MenuItem>Test1</MenuItem>
                        <MenuItem>Test2</MenuItem>
                    </Dropdown>
                );
                const container = component.container.querySelector("ul.menu");
                const colors = ColorMap.get(variant);

                expect(container).toHaveClass(colors.bg as string);
                expect(container).toHaveClass(colors.text as string);
                expect(container).toMatchSnapshot();
            });
        });
    });

    describe("Position", ()=>{
        ["left", "right", "bottom", "top"].forEach(position=>{
            it(`Respects ${position} position`, ()=>{
                const component = render(
                    <Dropdown button={<button>Button</button>} position={position as any}>
                        <MenuItem>Test1</MenuItem>
                        <MenuItem>Test2</MenuItem>
                    </Dropdown>
                );
                const container = component.container.querySelector("div.dropdown");
                expect(container).toHaveClass(`dropdown-${position}` as string);
            });
        });
    });

    it("Should add custom class to dropdown wrapper", () => {
        const { container } = render(
            <Dropdown button={<button>Button</button>} className="custom-class">
                <MenuItem>Test1</MenuItem>
                <MenuItem>Test2</MenuItem>
            </Dropdown>
        );
        expect(container.querySelector("div.dropdown")).toHaveClass("custom-class");
    });

    it("Should add custom classes to the dropdown menu with menuClassName", () => {
        const { container } = render(
            <Dropdown button={<button>Button</button>} menuClassName="custom-class">
                <MenuItem>Test1</MenuItem>
                <MenuItem>Test2</MenuItem>
            </Dropdown>
        );
        expect(container.querySelector("ul.menu")).toHaveClass("custom-class");
    });

    it("Should set id", () => {
        const { container } = render(
            <Dropdown button={<button>Button</button>} id="custom-id">
                <MenuItem>Test1</MenuItem>
                <MenuItem>Test2</MenuItem>
            </Dropdown>
        );
        expect(container.querySelector("#custom-id")).toBeInTheDocument();
    });

    it("Should set hover", () => {
        const { container } = render(
            <Dropdown button={<button>Button</button>} hover>
                <MenuItem>Test1</MenuItem>
                <MenuItem>Test2</MenuItem>
            </Dropdown>
        );
        expect(container.querySelector("div.dropdown")).toHaveClass("dropdown-hover");
    });

    it("Should set isEnd prop", () => {
        const { container } = render(
            <Dropdown button={<button>Button</button>} isEnd>
                <MenuItem>Test1</MenuItem>
                <MenuItem>Test2</MenuItem>
            </Dropdown>
        );
        expect(container.querySelector("div.dropdown")).toHaveClass("dropdown-end");
    });

    it("Should set isOpen prop", () => {
        const { container } = render(
            <Dropdown button={<button>Button</button>} isOpen>
                <MenuItem>Test1</MenuItem>
                <MenuItem>Test2</MenuItem>
            </Dropdown>
        );
        expect(container.querySelector("div.dropdown")).toHaveClass("dropdown-open");
    });

    it("calls the onClick prop when the element is clicked", () => {
        const onClick = jest.fn();
        const { container } = render(
            <Dropdown button={<button>Button</button>} id="custom-id" onClick={onClick}>
                <MenuItem>Test1</MenuItem>
                <MenuItem>Test2</MenuItem>
            </Dropdown>
        );
        const el = container.querySelector("ul.menu");
        fireEvent.click(el as any);
        expect(onClick).toHaveBeenCalled();
    });
});
