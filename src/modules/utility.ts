import React, { FunctionComponent } from "react";
import { ComponentOrJSX } from "../@types/Generic";
import ReactIs from "react-is";

export function processComponentOrJSX<P=any>(target :ComponentOrJSX<P>) :FunctionComponent<P> | null {
    if(ReactIs.isValidElementType(target)) {
        return target as React.FunctionComponent<P>;
    }
    const wrapper :FunctionComponent<P> = (props :any) => {
        return React.cloneElement(target as JSX.Element, props);
    };
    return wrapper;
};
