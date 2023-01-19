import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ConfirmModal } from "../ConfirmModal";

describe("ConfirmModal", () => {
    it("should render with default values", () => {
        const { container } = render(<ConfirmModal isOpen={true} closeHandler={jest.fn()} />);
        expect(container).toMatchSnapshot();
    });

    it("should call closeHandler when close button is clicked", () => {
        const closeHandler = jest.fn();
        const { container } = render(<ConfirmModal isOpen={true} closeHandler={closeHandler} />);
        fireEvent.click((container as any).querySelector(".modal-action button:first-child"));
        expect(closeHandler).toHaveBeenCalled();
    });

    it("should call confirmHandler when confirm button is clicked", () => {
        const confirmHandler = jest.fn();
        const { container } = render(<ConfirmModal isOpen={true} closeHandler={jest.fn()} confirmHandler={confirmHandler} />);
        fireEvent.click((container as any).querySelector(".modal-action button:last-child"));
        expect(confirmHandler).toHaveBeenCalled();
    });
});
