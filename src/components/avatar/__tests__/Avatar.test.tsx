import { fireEvent, render } from "@testing-library/react";
import { VariantOptions } from "../../../modules/testUtils";
import { Avatar } from "../Avatar";

describe("Avatar", ()=>{
    describe("Variants", ()=>{
        VariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(
                    <Avatar variant={variant} contentClasses={"find-me"}>
                        <span>{variant}</span>
                    </Avatar>
                );
                const container = component.container.querySelector("div.find-me");
                expect(container).toHaveClass(`bg-${variant}`, `text-${variant}-content`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("Respects onClick when passed in", ()=>{
        const stub = jest.fn();
        const component = render(
            <Avatar
                onClick={stub}
            >
                <span>NN</span>
            </Avatar>
        );
        const container = component.container.querySelector("div.avatar");
        fireEvent.click(container as HTMLButtonElement);
        expect(stub).toHaveBeenCalled();
    });

    it("Renders children when passed in", ()=>{
        const component = render(
            <Avatar>
                <span className="find-me">NN</span>
            </Avatar>
        );
        const container = component.container.querySelector("span.find-me");
        expect(container).toBeInTheDocument();
    });

    it("Respects className when passed in", ()=>{
        const component = render(
            <Avatar className="find-me">
                <span>NN</span>
            </Avatar>
        );
        const container = component.container.querySelector("div.find-me");
        expect(container).toBeInTheDocument();
        expect(container).toEqual(component.container.querySelector("div.avatar"));
    });

    it("Respects contentClasses when passed in", ()=>{
        const component = render(
            <Avatar contentClasses="find-me">
                <span>NN</span>
            </Avatar>
        );
        const container = component.container.querySelector("div.find-me");
        expect(container).toBeInTheDocument();
        expect(container).toEqual(component.container.querySelector("div.avatar")?.firstChild);
    });

    it("Respects status online when passed in", ()=>{
        const component = render(
            <Avatar status="online">
                <span>NN</span>
            </Avatar>
        );
        const container = component.container.querySelector("div.online");
        const missingContainer = component.container.querySelector("div.offline");
        expect(container).toBeInTheDocument();
        expect(missingContainer).not.toBeInTheDocument();
    });

    it("Respects status offline when passed in", ()=>{
        const component = render(
            <Avatar status="offline">
                <span>NN</span>
            </Avatar>
        );
        const container = component.container.querySelector("div.offline");
        const missingContainer = component.container.querySelector("div.online");
        expect(container).toBeInTheDocument();
        expect(missingContainer).not.toBeInTheDocument();
    });
});
