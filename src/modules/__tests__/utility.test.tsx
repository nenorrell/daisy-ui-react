import React from "react";
import { processComponentOrJSX } from "../utility";

describe("processComponentOrJSX", () => {
    it("should return the input component if it is a valid React component", () => {
        const TestComponent = () => <div>Test</div>;
        const result = processComponentOrJSX(TestComponent);
        expect(result).toBe(TestComponent);
    });

    it("should return a wrapper component if the input is a JSX element", () => {
        const TestJSX = <div>Test</div>;
        const result = processComponentOrJSX(TestJSX);
        expect(result).toBeInstanceOf(Function);
    });

    it("should pass props to the input JSX element", () => {
        const testJSX = <div>Test</div>;
        const wrapper = processComponentOrJSX(testJSX);
        const result = wrapper!({ className: "test" });
        expect(result!.props.className).toBe("test");
    });
});

