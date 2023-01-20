import { Variant } from "./Daisy";

export interface DaisyColor{
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
