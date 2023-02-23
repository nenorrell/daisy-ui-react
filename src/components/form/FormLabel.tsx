import { forwardRef, LabelHTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

interface IFormLabel extends PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> {
    title :string
};

export const FormLabel = forwardRef<HTMLDivElement, IFormLabel>((
    {
        title,
        className,
        children,
        ...props
    },
    ref
)=>{
    return (
        <label {...props} className={clsx("label", className)}>
            <span className="label-text" ref={ref}>{title}</span>
            {children}
        </label>
    );
});

FormLabel.displayName = "FormLabel";
