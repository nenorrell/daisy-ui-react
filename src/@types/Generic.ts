export type ComponentOrJSX<T=any> = React.FunctionComponent<T> | React.ReactElement;

export type WithRef<I, R=any> = I & {ref ?:React.ForwardedRef<R>}

/**
 * custom Map interface to get rid of implicit "possibly undefined value" from Map
 * See: https://github.com/microsoft/TypeScript/issues/9619
*/
export interface IMap<K, V> extends Map<K, V> {
    get(key :K) :V;
}

export type CSSUnit =
  | "em"
  | "ex"
  | "ch"
  | "rem"
  | "vw"
  | "vh"
  | "vmin"
  | "vmax"
  | "cm"
  | "mm"
  | "in"
  | "px"
  | "pt"
  | "pc"
  | "%";
