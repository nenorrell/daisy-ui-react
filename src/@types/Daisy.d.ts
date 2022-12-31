export type Variant = "primary"|"secondary"|"accent"|"neutral"|"info"|"success"|"error"|"warning" | "base-100" | "base-200" | "base-300"
export type BaselessVariant = Exclude<Variant, "base-100"|"base-200"|"base-300">

export interface VariantColors {
    bg :`bg-${Variant}`
    text :`text-${Variant | "base"}-content`
    focus ?:`${BaselessVariant}-focus`,
    btn ?:`btn-${BaselessVariant}`
}

export type ButtonSize = "lg" | "md" | "sm" | "xs";
