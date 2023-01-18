export type ComponentOrJSX<T=any> = React.FunctionComponent<T> | React.ReactElement;

/**
 * custom Map interface to get rid of implicit "possibly undefined value" from Map
 * See: https://github.com/microsoft/TypeScript/issues/9619
*/
export interface IMap<K, V> extends Map<K, V> {
    get(key :K) :V;
}
