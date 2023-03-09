import { CSSProperties, forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import { Variant } from "../../@types/Colors";
import { CSSUnit } from "../../@types/Generic";
import clsx from "clsx";

interface IRadialProgress extends HTMLAttributes<HTMLDivElement>{
    value :number
    thickness ?:`${number}${CSSUnit}`
    size ?:`${number}${CSSUnit}`
    variant ?:Variant,
    fill ?:boolean
}
export const RadialProgress = forwardRef<HTMLDivElement, PropsWithChildren<IRadialProgress>>((
    {
        value,
        thickness,
        size,
        variant,
        fill,
        className,
        children,
        ...props
    },
    ref
)=>{
    const styleProps = {
        "--value": value,
        ...(thickness && {"--thickness": thickness}),
        ...(size && {"--size": size})
    } as CSSProperties;

    return (
        <div
            {...props}
            ref={ref}
            style={styleProps}
            className={clsx(
                "radial-progress",
                className,
                variant && fill && `bg-${variant} text-${variant}-content`,
                variant && !fill && `text-${variant}`,
            )}
        >
            {children || `${value}%`}
        </div>
    );
});

RadialProgress.displayName = "RadialProgress";
