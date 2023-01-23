import { render } from "@testing-library/react";
import { CollapseBody } from "../CollapseBody";

describe("SimpleCollapse", ()=>{
    it("Should render multiple children as expected", ()=>{
        const {container} = render(
            <CollapseBody>
                <h2 className="w-full text-2xl">This is the body</h2>
                <div className="mr-4">something else</div>
            </CollapseBody>
        );
        expect(container).toMatchSnapshot();
    });

    it("Should render single child as expected", ()=>{
        const {container} = render(
            <CollapseBody>
                <h2 className="w-full text-2xl">This is the body</h2>
            </CollapseBody>
        );
        expect(container).toMatchSnapshot();
    });

    it("Respects the className prop", ()=>{
        const {container} = render(
            <CollapseBody className="find-me">
                <h2 className="w-full text-2xl">This is the body</h2>
            </CollapseBody>
        );
        expect(container.querySelector("div.find-me")).toBeInTheDocument();
    });

    it("Does not shrink body when expanded", ()=>{
        const {container} = render(
            <CollapseBody isExpanded>
                <h2 className="w-full text-2xl">This is the body</h2>
            </CollapseBody>
        );
        expect(container.querySelector("div.collapse-body")).not.toHaveClass("h-0");
    });

    it("Does shrink body when not expanded", ()=>{
        const {container} = render(
            <CollapseBody>
                <h2 className="w-full text-2xl">This is the body</h2>
            </CollapseBody>
        );
        expect(container.querySelector("div.collapse-body")).toHaveClass("h-0");
    });
});
