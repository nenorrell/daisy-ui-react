export type BaseVariant = "base-100"|"base-200"|"base-300";
export type StatusVariant = "info"|"success"|"error"|"warning"
export type Variant = "primary"|"secondary"|"accent"|"neutral"|BaseVariant|StatusVariant
export type BaselessVariant = Exclude<Variant, BaseVariant>
export type NoBaseOrNeutralVariant = Exclude<BaselessVariant, "nuetral">

export interface DaisyUtilityColor{
    bg: `bg-${Variant}`,
    to: `to-${Variant}`,
    via: `via-${Variant}`,
    from: `from-${Variant}`,
    text: `text-${Variant}`,
    ring: `ring-${Variant}`,
    fill: `fill-${Variant}`,
    caret: `caret-${Variant}`,
    stroke: `stroke-${Variant}`,
    border: `border-${Variant}`,
    divide: `divide-${Variant}`,
    accent: `accent-${Variant}`,
    shadow: `shadow-${Variant}`,
    outline: `outline-${Variant}`,
    decoration: `decoration-${Variant}`,
    placeholder: `placeholder-${Variant}`,
    ringOffset: `ring-offset-${Variant}`,
}

export type DaisyTextColor = `text-${Variant}-content` | "text-base-content";
export type DaisyBgColor = `bg-${Variant}` | "text-base-content";
