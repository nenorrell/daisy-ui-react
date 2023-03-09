import { forwardRef, ProgressHTMLAttributes } from "react";
import { NoBaseOrNeutralVariant } from "../../@types/Colors";
import clsx from "clsx";

interface IProgress extends ProgressHTMLAttributes<HTMLProgressElement> {
    max :number
    value :number
    variant ?:NoBaseOrNeutralVariant
}
export const Progress = forwardRef<HTMLProgressElement, IProgress>((
    {
        max,
        value,
        variant,
        className,
        ...props
    },
    ref
)=>{
    return (
        <progress
            {...props}
            max={max}
            value={value}
            ref={ref}
            className={clsx(
                "progress",
                className,
                variant && `progress-${variant}`
            )} />
    );
});

Progress.displayName = "Progress";
