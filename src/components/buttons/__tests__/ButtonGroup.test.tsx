import { render } from "@testing-library/react";
import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";

describe("Button Group", ()=>{
    it("Renders default state with children", () => {
        const { container } = render(
            <ButtonGroup>
                <Button>Button 1</Button>
                <Button isActive>Button 2</Button>
                <Button>Button 3</Button>
            </ButtonGroup>
        );
        const el = container.firstChild;
        expect(el).toHaveClass("btn-group");
        expect(el?.childNodes.length).toEqual(3);
    });

    it("Renders vertical state", () => {
        const { container } = render(
            <ButtonGroup isVertical>
                <Button>Button 1</Button>
                <Button isActive>Button 2</Button>
                <Button>Button 3</Button>
            </ButtonGroup>
        );
        const el = container.firstChild;
        expect(el).toHaveClass("btn-group-vertical");
    });

    it("Renders className prop", () => {
        const { container } = render(
            <ButtonGroup className="find-me">
                <Button>Button 1</Button>
                <Button isActive>Button 2</Button>
                <Button>Button 3</Button>
            </ButtonGroup>
        );
        const el = container.querySelector("div.find-me");
        expect(el).toBeInTheDocument();
    });

    it("Renders id prop", () => {
        const { container } = render(
            <ButtonGroup id="find-me">
                <Button>Button 1</Button>
                <Button isActive>Button 2</Button>
                <Button>Button 3</Button>
            </ButtonGroup>
        );
        const el = container.querySelector("div#find-me");
        expect(el).toBeInTheDocument();
    });
});
