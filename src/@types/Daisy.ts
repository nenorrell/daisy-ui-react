export type Size = "lg" | "md" | "sm" | "xs";
export type ButtonSize = Size | "wide" | "block";
export type AllSizes = Size | ButtonSize;

export interface ComponentSize {
    btn ?:`btn-${ButtonSize}`
    badge ?:`badge-${Size}`
};
