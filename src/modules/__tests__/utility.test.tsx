import React from "react";
import { ButtonSize } from "../../@types/Daisy";
import { getButtonSize, processComponentOrJSX } from "../utility";

describe("getButtonSize()", ()=>{
    const buttonSizes :ButtonSize[] = ["xs", "sm", "md", "lg"];
    buttonSizes.forEach(size =>{
        it(`It gets the proper class when ${size} is passed in`, ()=>{
            expect(getButtonSize(size)).toEqual(`btn-${size}`);
        });
    });
});

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

