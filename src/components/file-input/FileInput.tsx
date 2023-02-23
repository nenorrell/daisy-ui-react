import { forwardRef, InputHTMLAttributes, PropsWithChildren } from "react";
import { NoBaseOrNeutralVariant } from "../../@types/Colors";
import { Size } from "../../@types/Daisy";
import clsx from "clsx";

interface IFileInput extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>{
    isBordered ?:boolean
    isGhost ?:boolean
    scale ?:Size
    variant ?:NoBaseOrNeutralVariant
}
export const FileInput = forwardRef<HTMLInputElement, IFileInput>((
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
        <input
            {...props}
            type="file"
            ref={ref}
            className={clsx(
                "file-input",
                className,
                {[`file-input-${scale}`]: scale},
                {[`file-input-${variant}`]: variant},
                isBordered && "file-input-bordered",
                isGhost && "file-input-ghost"
            )} />
    );
});

FileInput.displayName = "FileInput";
