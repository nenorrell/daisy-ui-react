import React from "react";
import { render } from "@testing-library/react";
import { FormLabel } from "../FormLabel";

describe("FormLabel", () => {
    it("renders the title prop", () => {
        const { getByText } = render(<FormLabel title="Test Title" />);
        expect(getByText("Test Title")).toBeInTheDocument();
    });

    it("renders the children prop", () => {
        const { getByText } = render(<FormLabel title="Test Title">Test Children</FormLabel>);
        expect(getByText("Test Children")).toBeInTheDocument();
    });

    it("applies the className prop", () => {
        const { container } = render(<FormLabel title="Test Title" className="test-class" />);
        expect(container.firstChild).toHaveClass("test-class");
    });

    it("renders with the FormLabel displayName", () => {
        expect(FormLabel.displayName).toEqual("FormLabel");
    });
});
