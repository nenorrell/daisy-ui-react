import React from "react";
import { render } from "@testing-library/react";
import { FormControl } from "../FormControl";

describe("FormControl", () => {
    it("renders the children prop", () => {
        const { getByText } = render(<FormControl>Test Children</FormControl>);
        expect(getByText("Test Children")).toBeInTheDocument();
    });

    it("applies the className prop", () => {
        const { container } = render(<FormControl className="test-class" />);
        expect(container.firstChild).toHaveClass("test-class");
    });

    it("renders with the FormControl displayName", () => {
        expect(FormControl.displayName).toEqual("FormControl");
    });
});
