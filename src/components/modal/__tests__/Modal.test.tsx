import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Modal } from "../Modal";

describe("Modal", () => {
    it("should render with default values", () => {
        const { container } = render(<Modal isOpen={true} />);
        expect(container).toMatchSnapshot();
    });

    it("should call closeHandler when close button is clicked", () => {
        const closeHandler = jest.fn();
        const { container } = render(<Modal isOpen={true} closeHandler={closeHandler} />);
        fireEvent.click((container as any).querySelector(".modal-action button"));
        expect(closeHandler).toHaveBeenCalled();
    });

    it("should not render with confirm button if noActionButton is true", () => {
        const { container } = render(<Modal isOpen={true} noActionButton={true} />);
        expect(container.querySelector(".modal-action")).toBeFalsy();
    });
});
