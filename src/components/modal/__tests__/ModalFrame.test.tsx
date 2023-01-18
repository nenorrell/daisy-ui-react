import { render, fireEvent } from "@testing-library/react";
import ColorMap from "../../../modules/ColorMap";
import { VariantOptions } from "../../../modules/testUtils";
import { ModalFrame } from "../ModalFrame";

describe("ModalFrame", () => {
    describe("Variants", ()=>{
        VariantOptions.forEach(variant=>{
            it(`Respects ${variant} variant`, ()=>{
                const component = render(<ModalFrame variant={variant}>testing {variant} variant</ModalFrame>);
                const container = component.container.querySelector("div.modal-box");
                const colors = ColorMap.get(variant);

                expect(container?.classList.contains(colors.bg as string)).toBe(true);
                expect(container?.classList.contains(colors.text as string)).toBe(true);
                expect(container).toMatchSnapshot();
            });
        });
    });

    it("should render with default values", () => {
        const { container } = render(<ModalFrame isOpen={true} />);
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
        const { container } = render(<ModalFrame isOpen={true} position="bottom" />);
        expect(container.firstChild).toHaveClass("modal-bottom");
    });

    it("should render with the correct id", () => {
        const { container } = render(<ModalFrame isOpen={true} id="test-id" />);
        expect(container.firstChild).toHaveAttribute("id", "test-id");
    });

    it("should render with the correct class name", () => {
        const { container } = render(<ModalFrame isOpen={true} className="test-class" />);
        expect(container.querySelector(".modal-box")).toHaveClass("test-class");
    });

    it("should render with the correct action section", () => {
        const actionSection = <div className="test-action-section">Test Action Section</div>;
        const { container } = render(<ModalFrame isOpen={true} ActionSection={actionSection} />);
        expect(container.querySelector(".test-action-section")).toBeTruthy();
    });
});
