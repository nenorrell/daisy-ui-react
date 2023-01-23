import { fireEvent, render } from "@testing-library/react";
import { CollapseTitle } from "../CollapseTitle";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";

describe("SimpleCollapse", ()=>{
    it("Should render multiple children as expected", ()=>{
        const {container} = render(
            <CollapseTitle>
                <div className="mr-4">
                    <Cog6ToothIcon className="h-5 w-5" />
                </div>
                <h2 className="w-full text-2xl">This is the title</h2>
            </CollapseTitle>
        );
        expect(container).toMatchSnapshot();
    });

    it("Should render single child as expected", ()=>{
        const {container} = render(
            <CollapseTitle>
                <h2 className="w-full text-2xl">This is the title</h2>
            </CollapseTitle>
        );
        expect(container).toMatchSnapshot();
    });

    it("Respects the className prop", ()=>{
        const {container} = render(
            <CollapseTitle className="find-me">
                <h2 className="w-full text-2xl">This is the title</h2>
            </CollapseTitle>
        );
        expect(container.querySelector("div.find-me")).toBeInTheDocument();
    });

    it("Does not rotate right icon when expanded", ()=>{
        const {container} = render(
            <CollapseTitle isExpanded>
                <h2 className="w-full text-2xl">This is the title</h2>
            </CollapseTitle>
        );
        expect(container.querySelector("div.items-end")).not.toHaveClass("-rotate-90");
    });

    it("Does rotate right icon when not expanded", ()=>{
        const {container} = render(
            <CollapseTitle>
                <h2 className="w-full text-2xl">This is the title</h2>
            </CollapseTitle>
        );
        expect(container.querySelector("div.items-end")).toHaveClass("-rotate-90");
    });

    it("Respects RightIcon prop", ()=>{
        const {container} = render(
            <CollapseTitle RightIcon={<Cog6ToothIcon className="find-me" />}>
                <h2 className="w-full text-2xl">This is the title</h2>
            </CollapseTitle>
        );
        expect(container.querySelector("svg.find-me")).toBeInTheDocument();
    });

    it("Respects onClick when passed in", ()=>{
        const stub = jest.fn();
        const {container} = render(
            <CollapseTitle onClick={stub}>
                <h2 className="w-full text-2xl">This is the title</h2>
            </CollapseTitle>
        );

        const collapseTitle = container.querySelector<HTMLDivElement>("div.collapse-title");
        fireEvent.click(collapseTitle as HTMLDivElement);
        expect(stub).toHaveBeenCalled();
    });
});
