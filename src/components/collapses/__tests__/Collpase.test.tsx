import { ArrowDownIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { render, fireEvent } from "@testing-library/react";
import { Collapse } from "../Collapse";
import { CollapseBody } from "../CollapseBody";
import { CollapseTitle } from "../CollapseTitle";

describe("Collapse Component", () => {
    beforeEach(() => {
        Object.defineProperty(HTMLElement.prototype, "scrollHeight", { configurable: true, value: 30 });
        Object.defineProperty(HTMLElement.prototype, "clientHeight", { configurable: true, value: 10 });
    });

    afterEach(()=>{
        // Set these back to undefined to prevent test bleed
        delete (HTMLElement as any).prototype.scrollHeight;
        delete (HTMLElement as any).prototype.clientHeight;
    });

    it("Renders a collapse component", () => {
        const component = render(
            <Collapse>
                <CollapseTitle
                    className="bg-base-300 rounded-t-md"
                    RightIcon={<ArrowDownIcon className="h-5 w-5"/>}
                >
                    <div className="mr-4">
                        <Cog6ToothIcon className="h-5 w-5" />
                    </div>
                    <h2 className="w-full text-2xl">This is the title</h2>
                </CollapseTitle>

                <CollapseBody className="bg-base-200">
                    <p className="p-4">This is the body</p>
                </CollapseBody>
            </Collapse>
        );

        const collapseBody = component.container.querySelector<HTMLDivElement>("div.collapse-body");
        expect(collapseBody).toHaveClass("h-0");
        expect(collapseBody?.style.height).toBe("0px");
        expect(component.container).toMatchSnapshot();
    });

    it("Respects onClick when passed in", ()=>{
        const stub = jest.fn();
        const component = render(
            <Collapse onClick={stub}>
                <CollapseTitle
                    className="bg-base-300 rounded-t-md"
                    RightIcon={<ArrowDownIcon className="h-5 w-5"/>}
                >
                    <div className="mr-4">
                        <Cog6ToothIcon className="h-5 w-5" />
                    </div>
                    <h2 className="w-full text-2xl">This is the title</h2>
                </CollapseTitle>

                <CollapseBody className="bg-base-200">
                    <p className="p-4">This is the body</p>
                </CollapseBody>
            </Collapse>
        );

        const collapseTitle = component.container.querySelector<HTMLDivElement>("div.collapse-title");
        fireEvent.click(collapseTitle as HTMLDivElement);
        expect(stub).toHaveBeenCalled();
    });

    it("Toggles collapse on click", () => {
        const component = render(
            <Collapse>
                <CollapseTitle
                    className="bg-base-300 rounded-t-md"
                    RightIcon={<ArrowDownIcon className="h-5 w-5"/>}
                >
                    <div className="mr-4">
                        <Cog6ToothIcon className="h-5 w-5" />
                    </div>
                    <h2 className="w-full text-2xl">This is the title</h2>
                </CollapseTitle>

                <CollapseBody className="bg-base-200">
                    <p className="p-4">This is the body</p>
                </CollapseBody>
            </Collapse>
        );

        const collapseTitle = component.container.querySelector<HTMLDivElement>("div.collapse-title");
        const collapseBody = component.container.querySelector<HTMLDivElement>("div.collapse-body");
        const chevronWrapper = collapseTitle?.querySelector<HTMLDivElement>("div.items-end");

        // Initial state
        expect(collapseBody).toHaveClass("h-0");
        expect(collapseBody?.style.height).toBe("0px");
        expect(chevronWrapper).toHaveClass("-rotate-90");
        // Expand
        fireEvent.click(collapseTitle as HTMLDivElement);
        expect(collapseBody).not.toHaveClass("h-0");
        expect(collapseBody?.style.height).toBe("30px");
        expect(chevronWrapper).not.toHaveClass("-rotate-90");

        // Collapse
        fireEvent.click(collapseTitle as HTMLDivElement);
        expect(collapseBody).toHaveClass("h-0");
        expect(collapseBody?.style.height).toBe("0px");
        expect(chevronWrapper).toHaveClass("-rotate-90");
    });

    it("Toggles collapse on click when defaultExpand is set to true", () => {
        const component = render(
            <Collapse defaultExpand>
                <CollapseTitle
                    className="bg-base-300 rounded-t-md"
                    RightIcon={<ArrowDownIcon className="h-5 w-5"/>}
                >
                    <div className="mr-4">
                        <Cog6ToothIcon className="h-5 w-5" />
                    </div>
                    <h2 className="w-full text-2xl">This is the title</h2>
                </CollapseTitle>

                <CollapseBody className="bg-base-200">
                    <p className="p-4">This is the body</p>
                </CollapseBody>
            </Collapse>
        );
        const collapseTitle = component.container.querySelector<HTMLDivElement>("div.collapse-title");
        const collapseBody = component.container.querySelector<HTMLDivElement>("div.collapse-body");
        const chevronWrapper = collapseTitle?.querySelector<HTMLDivElement>("div.items-end");

        // Initial state
        expect(collapseBody).not.toHaveClass("h-0");
        expect(collapseBody?.style.height).toBe("30px");
        expect(chevronWrapper).not.toHaveClass("-rotate-90");

        // Collapse
        fireEvent.click(collapseTitle as HTMLDivElement);
        expect(collapseBody).toHaveClass("h-0");
        expect(collapseBody?.style.height).toBe("0px");
        expect(chevronWrapper).toHaveClass("-rotate-90");

        // Expand
        fireEvent.click(collapseTitle as HTMLDivElement);
        expect(collapseBody).not.toHaveClass("h-0");
        expect(collapseBody?.style.height).toBe("30px");
        expect(chevronWrapper).not.toHaveClass("-rotate-90");
    });

    it("Renders an expanded collapse component when defaultExpand is true", () => {
        const {container} = render(
            <Collapse defaultExpand>
                <CollapseTitle
                    className="bg-base-300 rounded-t-md"
                    RightIcon={<ArrowDownIcon className="h-5 w-5"/>}
                >
                    <div className="mr-4">
                        <Cog6ToothIcon className="h-5 w-5" />
                    </div>
                    <h2 className="w-full text-2xl">This is the title</h2>
                </CollapseTitle>

                <CollapseBody className="bg-base-200">
                    <p className="p-4">This is the body</p>
                </CollapseBody>
            </Collapse>
        );
        const collapseBody = container.querySelector<HTMLDivElement>("div.collapse-body");

        expect(collapseBody).not.toHaveClass("h-0");
        expect(collapseBody?.style.height).toBe("30px");
        expect(container).toMatchSnapshot();
    });

    it("Respects works with regular children", () => {
        // This will throw a ReactDOM warning since these divs aren't function
        // componenets & don't have an "isExpanded" prop associated to them.
        const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});

        const {container} = render(
            <Collapse>
                <div className="title-test">Title</div>
                <div className="body-test">Body</div>
            </Collapse>
        );

        const el = container.firstChild as HTMLElement;
        const titleEl = el?.querySelector("div.title-test");
        const bodyEl = el?.querySelector("div.body-test");
        expect(el).toBeInTheDocument();
        expect(titleEl).toBeInTheDocument();
        expect(bodyEl).toBeInTheDocument();
        expect(el).toMatchSnapshot();
        consoleSpy.mockRestore();
    });

    it("Throws an error when more than 2 children are passed", () => {
        const CollapseAny :any = Collapse;
        const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});

        expect(()=>render(
            <CollapseAny defaultExpand>
                <CollapseTitle
                    className="bg-base-300 rounded-t-md"
                    RightIcon={<ArrowDownIcon className="h-5 w-5"/>}
                >
                    <div className="mr-4">
                        <Cog6ToothIcon className="h-5 w-5" />
                    </div>
                    <h2 className="w-full text-2xl">This is the title</h2>
                </CollapseTitle>

                <CollapseBody className="bg-base-200">
                    <p className="p-4">This is the body</p>
                </CollapseBody>

                <CollapseBody className="bg-base-200">
                    <p className="p-4">This is the body</p>
                </CollapseBody>
            </CollapseAny>
        )).toThrowError("Collapse expects exactly two root children");

        consoleSpy.mockRestore();
    });

    it("Throws an error when less than 2 children are passed", () => {
        const CollapseAny :any = Collapse;
        const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});

        expect(()=>render(
            <CollapseAny defaultExpand>
                <CollapseTitle
                    className="bg-base-300 rounded-t-md"
                    RightIcon={<ArrowDownIcon className="h-5 w-5"/>}
                >
                    <div className="mr-4">
                        <Cog6ToothIcon className="h-5 w-5" />
                    </div>
                    <h2 className="w-full text-2xl">This is the title</h2>
                </CollapseTitle>
            </CollapseAny>
        )).toThrowError("Collapse expects exactly two root children");

        consoleSpy.mockRestore();
    });
});
