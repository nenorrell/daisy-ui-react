import { forwardRef, LabelHTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

interface IFormLabel extends PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> {
    title :string
};

export const FormLabel = forwardRef<HTMLDivElement, IFormLabel>((
    {
        className,
        children,
        ...props
    },
    ref
)=>{
    return (
        <label {...props} className={clsx("label", className)}>
            <span ref={ref}>{props.title}</span>
            {children}
        </label>
    );
});

FormLabel.displayName = "FormLabel";
