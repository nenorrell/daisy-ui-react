import { fireEvent, render } from "@testing-library/react";
import { Swap } from "../Swap";

describe("DropdownMenu", () => {
    it("Should respect the isActive prop", ()=>{
        const { container } = render(
            <Swap isActive className="text-5xl">
                <div className="first-el">🥵</div>
                <div className="second-el">🥶</div>
            </Swap>
        );

        const el = container.querySelector("label.swap");
        expect(el).toHaveClass("swap-active");
    });

    it("Toggles the swap on click", () => {
        const { container } = render(
            <Swap className="text-5xl">
                <div className="first-el">🥵</div>
                <div className="second-el">🥶</div>
            </Swap>
        );

        const el = container.querySelector("label.swap");

        expect(el).not.toHaveClass("swap-active");
        fireEvent.click(el as any);
        expect(el).toHaveClass("swap-active");
        fireEvent.click(el as any);
        expect(el).not.toHaveClass("swap-active");
    });

    it("Toggles the swap on click with isAcitve", () => {
        const { container } = render(
            <Swap isActive className="text-5xl">
                <div className="first-el">🥵</div>
                <div className="second-el">🥶</div>
            </Swap>
        );

        const el = container.querySelector("label.swap");

        expect(el).toHaveClass("swap-active");
        fireEvent.click(el as any);
        expect(el).not.toHaveClass("swap-active");
    });

    it("calls the onClick prop when Swap element is clicked", () => {
        const onClick = jest.fn();
        const { container } = render(
            <Swap className="text-5xl" onClick={onClick}>
                <div className="first-el">🥵</div>
                <div className="second-el">🥶</div>
            </Swap>
        );

        const el = container.querySelector("label.swap");
        fireEvent.click(el as any);
        expect(onClick).toHaveBeenCalled();
    });

    it("Renders children with expected classes", () => {
        const { container } = render(
            <Swap className="text-5xl">
                <div className="first-el">🥵</div>
                <div className="second-el">🥶</div>
            </Swap>
        );

        const el = container.querySelector("label.swap");
        const firstEl = el?.querySelector("div.first-el");
        const secondEl = el?.querySelector("div.second-el");

        expect(firstEl).toHaveClass("swap-off");
        expect(secondEl).toHaveClass("swap-on");
    });

    it("Throws an error when more than 2 children are passed", () => {
        const SwapAny :any = Swap;
        const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});

        expect(()=>render(
            <SwapAny className="text-5xl">
                <div className="first-el">🥵</div>
                <div className="second-el">🥶</div>
                <div className="third-el">😁</div>
            </SwapAny>
        )).toThrowError("Swap expects exactly two root children");

        consoleSpy.mockRestore();
    });

    it("Should respect the transition prop when it's flip", ()=>{
        const { container } = render(
            <Swap transition="flip" className="text-5xl">
                <div className="first-el">🥵</div>
                <div className="second-el">🥶</div>
            </Swap>
        );

        const el = container.querySelector("label.swap");
        expect(el).toHaveClass("swap-flip");
    });

    it("Should respect the transition prop when it's rotate", ()=>{
        const { container } = render(
            <Swap transition="rotate" className="text-5xl">
                <div className="first-el">🥵</div>
                <div className="second-el">🥶</div>
            </Swap>
        );

        const el = container.querySelector("label.swap");
        expect(el).toHaveClass("swap-rotate");
    });

    it("Should respect the id prop", ()=>{
        const { container } = render(
            <Swap id="find-me">
                <div className="first-el">🥵</div>
                <div className="second-el">🥶</div>
            </Swap>
        );

        const el = container.querySelector("label#find-me");
        expect(el).toBeInTheDocument();
    });

    it("Should respect the className prop", ()=>{
        const { container } = render(
            <Swap className="find-me">
                <div className="first-el">🥵</div>
                <div className="second-el">🥶</div>
            </Swap>
        );

        const el = container.querySelector("label.find-me");
        expect(el).toBeInTheDocument();
    });
});
