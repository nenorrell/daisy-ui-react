import React, { ReactElement, ReactNode } from "react";

export const passPropToChildren = <T=any>(children :ReactElement<T>[] | ReactElement<T>, props :object)=>{
    return React.Children.map<ReactNode, ReactElement>(children, (child) =>
        React.cloneElement(child, {
            ...child.props,
            ...props
        })
    );
};
