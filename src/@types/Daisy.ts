export type BaseVariant = "base-100"|"base-200"|"base-300";
export type StatusVariant = "info"|"success"|"error"|"warning"
export type Variant = "primary"|"secondary"|"accent"|"neutral"|BaseVariant|StatusVariant
export type BaselessVariant = Exclude<Variant, BaseVariant>

export interface VariantColors {
    bg :`bg-${Variant}`
    text :`text-${Variant | "base"}-content`
    focus ?:`${BaselessVariant}-focus`
    btn ?:`btn-${BaselessVariant}`
    alert ?:`alert-${StatusVariant}`
    badge ?:`badge-${BaselessVariant}`
}

export type Size = "lg" | "md" | "sm" | "xs";
export type ButtonSize = Size | "wide" | "block";
export type AllSizes = Size | ButtonSize;

export interface ComponentSize {
    btn ?:`btn-${ButtonSize}`
    badge ?:`badge-${Size}`
};
