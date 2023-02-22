import React, {forwardRef, LabelHTMLAttributes, ReactNode } from "react";
import { useToggle } from "../../modules/hooks";
import clsx from "clsx";

export interface ISwap extends LabelHTMLAttributes<HTMLLabelElement> {
    isActive ?:boolean
    transition ?: "rotate" | "flip"
    children :[ReactNode, ReactNode]
}
export const Swap = forwardRef<HTMLLabelElement, ISwap>((
    {
        className,
        isActive,
        transition,
        children,
        ...props
    },
    ref
)=>{
    if(children.length !== 2) {
        throw Error("Swap expects exactly two root children");
    }

    const [active, toggle] = useToggle(isActive || false);

    const formattedChildren = React.Children.map<ReactNode, ReactNode>(children, (child, i) => {
        if(React.isValidElement(child)) {
            const swapClass = i ? "swap-on" : "swap-off";
            return React.cloneElement(child, {
                ...(child.props),
                className: clsx(swapClass, child.props.className)
            });
        }
    });

    return (
        <label
            {...props}
            ref={ref}
            className={clsx(
                "swap",
                className,
                active && "swap-active",
                transition === "rotate" && "swap-rotate",
                transition === "flip" && "swap-flip"
            )}
            onClick={e =>{
                toggle();
                props.onClick && props.onClick(e);
            }}
        >
            {formattedChildren}
        </label>
    );
});
Swap.displayName = "Swap";
