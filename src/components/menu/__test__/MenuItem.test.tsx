import { fireEvent, render } from "@testing-library/react";
import { MenuItem } from "../MenuItem";

describe("Menu component", () => {
    it("should render", () => {
        const { container } = render(<MenuItem><span>Test</span></MenuItem>);
        expect(container).toBeTruthy();
    });

    it("should have the correct className", () => {
        const { container } = render(<MenuItem className="test-class"><span>Test</span></MenuItem>);
        expect(container.firstChild).toHaveClass("test-class");
    });

    it("applies the id prop to the li element", () => {
        const { container } = render(<MenuItem id="test-id" className="find-me">Testing</MenuItem>);
        const el = container.querySelector("li.find-me");

        expect(el!.id).toEqual("test-id");
    });

    it("adds the disabled class when the isDisabled prop is true", () => {
        const { container } = render(<MenuItem className="find-me" isDisabled>Testing</MenuItem>);
        const el = container.querySelector("li.find-me");

        expect(el).toHaveClass("disabled");
    });

    it("adds the bordered class when the isBordered prop is true", () => {
        const { container } = render(<MenuItem className="find-me" isBordered>Testing</MenuItem>);
        const el = container.querySelector("li.find-me");

        expect(el).toHaveClass("bordered");
    });

    it("adds the hover-bordered class when the hover prop is true", () => {
        const { container } = render(<MenuItem className="find-me" hover>Testing</MenuItem>);
        const el = container.querySelector("li.find-me");

        expect(el).toHaveClass("hover-bordered");
    });

    it("calls the onClick prop when the element is clicked", () => {
        const onClick = jest.fn();
        const { container } = render(<MenuItem className="find-me" onClick={onClick}>Testing</MenuItem>);

        const el = container.querySelector("li.find-me");
        fireEvent.click(el as any);
        expect(onClick).toHaveBeenCalled();
    });

    it("applies the className prop to the li element", () => {
        const { container } = render(<MenuItem className="custom-class">Testing</MenuItem>);
        expect(container.firstChild).toHaveClass("custom-class");
    });

    describe("Children handling", ()=>{
        it("should render children when a JSX element is passed in", () => {
            const { container } = render(<MenuItem><span className="find-me">Test</span></MenuItem>);
            expect(container.querySelector("span.find-me")).toBeTruthy();
        });

        it("should render children when just a string is passed in", () => {
            const { container } = render(<MenuItem>Test</MenuItem>);
            expect(container.firstChild?.firstChild?.textContent).toEqual("Test");
        });

        it("should pass isTitle prop to child", () => {
            const { container } = render(<MenuItem isTitle>
                <span className="find-me">Test</span>
            </MenuItem>);

            const el = container.querySelector("span.find-me");
            expect(el).toBeInTheDocument();
            expect(el).toHaveClass("menu-title");
        });

        it("should pass isTitle prop to child when just a string is passed in", () => {
            const { container } = render(<MenuItem isTitle>
                Test
            </MenuItem>);

            const el = container.firstChild?.firstChild;
            expect(el).toHaveClass("menu-title");
        });

        it("should pass isActive prop to child", () => {
            const { container } = render(<MenuItem isActive>
                <span className="find-me">Test</span>
            </MenuItem>);

            const el = container.querySelector("span.find-me");
            expect(el).toBeInTheDocument();
            expect(el).toHaveClass("active");
        });

        it("should pass isActive prop to child when just a string is passed in", () => {
            const { container } = render(<MenuItem isActive>
                Test
            </MenuItem>);

            const el = container.firstChild?.firstChild;
            expect(el).toHaveClass("active");
        });
    });
});
