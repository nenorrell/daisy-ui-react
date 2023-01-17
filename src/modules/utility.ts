import React, { FunctionComponent } from "react";
import { ButtonSize } from "../@types/Daisy";
import { ComponentOrJSX } from "../@types/Generic";
import ReactIs from "react-is";

export const getButtonSize = (size ?:ButtonSize) :`btn-${ButtonSize}`=>{
    switch(size) {
        case "xs":
            return "btn-xs";
        case "sm":
            return "btn-sm";
        case "md":
            return "btn-md";
        case "lg":
            return "btn-lg";
        case "wide":
            return "btn-lg";
        case "block":
            return "btn-block";
        default:
            return "btn-md";
    }
};

export function processComponentOrJSX<P=any>(target :ComponentOrJSX<P>) :FunctionComponent<P> | null {
    if(ReactIs.isValidElementType(target)) {
        return target as React.FunctionComponent<P>;
    }
    const wrapper :FunctionComponent<P> = (props :any) => {
        return React.cloneElement(target as JSX.Element, props);
    };
    return wrapper;
};
