export type BaseVariant = "base-100"|"base-200"|"base-300";
export type StatusVariant = "info"|"success"|"error"|"warning"
export type Variant = "primary"|"secondary"|"accent"|"neutral"|BaseVariant|StatusVariant
export type BaselessVariant = Exclude<Variant, BaseVariant>
export type NoBaseOrNeutralVariant = Exclude<BaselessVariant, "nuetral">
