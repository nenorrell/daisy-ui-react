import { forwardRef, TextareaHTMLAttributes } from "react";
import { NoBaseOrNeutralVariant } from "../../@types/Colors";
import { Size } from "../../@types/Daisy";
import clsx from "clsx";

interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    isBordered ?:boolean
    isGhost ?:boolean
    scale ?:Size
    variant ?:NoBaseOrNeutralVariant
}
export const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>((
    {
        isBordered,
        isGhost,
        scale="md",
        variant,
        className,
        ...props
    },
    ref
)=>{
    return (
        <textarea
            {...props}
            ref={ref}
            className={clsx(
                "textarea",
                className,
                isBordered && "textarea-bordered",
                isGhost && "textarea-ghost",
                {[`textarea-${scale}`]: scale},
                {[`textarea-${variant}`]: variant}
            )}>
        </textarea>
    );
});

Textarea.displayName = "Textarea";
