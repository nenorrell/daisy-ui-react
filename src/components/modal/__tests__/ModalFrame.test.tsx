import { render, fireEvent } from "@testing-library/react";
import { VariantOptions } from "../../../modules/testUtils";
import { ModalFrame } from "../ModalFrame";

describe("ModalFrame", () => {
    describe("Variants", ()=>{
        VariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(<ModalFrame variant={variant} isOpen={true} closeHandler={jest.fn()}>testing {variant} variant</ModalFrame>);
                const container = component.container.querySelector("div.modal-box");
                expect(container).toHaveClass(`bg-${variant}`, `text-${variant}-content`);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("should render with default values", () => {
        const { container } = render(<ModalFrame isOpen={true} closeHandler={jest.fn()} />);
        expect(container).toMatchSnapshot();
    });

    it("should close when the background is clicked", () => {
        const closeHandler = jest.fn();
        const { container } = render(<ModalFrame isOpen={true} closeHandler={closeHandler} />);
        fireEvent.click((container as any).firstChild);
        expect(closeHandler).toHaveBeenCalled();
    });

    it("should not close when the background is clicked if overlayClose is false", () => {
        const closeHandler = jest.fn();
        const { container } = render(<ModalFrame isOpen={true} closeHandler={closeHandler} overlayClose={false} />);
        fireEvent.click((container as any).firstChild);
        expect(closeHandler).not.toHaveBeenCalled();
    });

    it("should close when the corner close button is clicked", () => {
        const closeHandler = jest.fn();
        const { container } = render(<ModalFrame isOpen={true} closeHandler={closeHandler} cornerClose={true} />);
        fireEvent.click((container as any).querySelector(".right-1.top-1"));
        expect(closeHandler).toHaveBeenCalled();
    });

    it("should render with the correct position class", () => {
        const { container } = render(<ModalFrame isOpen={true} position="bottom" closeHandler={jest.fn()} />);
        expect(container.firstChild).toHaveClass("modal-bottom");
    });

    it("should render with the correct id", () => {
        const { container } = render(<ModalFrame isOpen={true} id="test-id" closeHandler={jest.fn()} />);
        expect(container.firstChild).toHaveAttribute("id", "test-id");
    });

    it("should render with the correct class name", () => {
        const { container } = render(<ModalFrame isOpen={true} className="test-class" closeHandler={jest.fn()} />);
        expect(container.querySelector(".modal-box")).toHaveClass("test-class");
    });
});
