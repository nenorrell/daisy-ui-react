export type BaseVariant = "base-100"|"base-200"|"base-300";
export type StatusVariant = "info"|"success"|"error"|"warning"
export type Variant = "primary"|"secondary"|"accent"|"neutral"|BaseVariant|StatusVariant
export type BaselessVariant = Exclude<Variant, BaseVariant>

export interface VariantColors {
    bg :`bg-${Variant}`
    text :`text-${Variant | "base"}-content`
    focus ?:`${BaselessVariant}-focus`,
    btn ?:`btn-${BaselessVariant}`
    alert ?:`alert-${StatusVariant}`
}

export type ButtonSize = "lg" | "md" | "sm" | "xs";
