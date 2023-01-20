⬅️ [Back to component index](README.md)

# SimpleCollapse

A simpler version of the Collapse component that provides an easy way to create collapsible content with a header.

The SimpleCollapse component is built on top of the `Collapse` component, only abstracts away some of the `Collapse` component complexity. It also provides things like `Variant` support, which the `Collapse` component does not have.

## Props

| Prop             | Type                                                | Default | Description                                                                                                                                                                                                 |
|------------------|--------------------------------------------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `headerContent`  | `string` or `ReactNode`                               |         | The content for the collapse header.                                                                                                                                                                         |
| `leftIcon`       | `ComponentOrJSX`                                     | `undefined` | The left icon for the collapse header.                                                                                                                                                                        |
| `className`      | `string`                                             | `""`    | Custom classes to apply to the collapse container.                                                                                                                                                            |
| `variant`        | `Variant`                                            | `"neutral"` | The variant color of the component.
| `rounded`        | `boolean`                                             | `false` | Determines whether the collapse should have rounded corners or not.
| `defaultExpand`  | `boolean`                                             | `false` | Determines whether the collapse should be expanded by default.


## Examples

```javascript
import { SimpleCollapse } from 'daisy-ui-react-components';
import { CogIcon } from "@heroicons/react/24/solid";

function Example() {
    return (
        <div>
            <SimpleCollapse headerContent="Click me to expand" leftIcon={CogIcon}>
                <p>This is the collapsible content</p>
            </SimpleCollapse>

            <SimpleCollapse headerContent="I am expanded by default" leftIcon={CogIcon} defaultExpand>
                <p>This content will be visible on page load</p>
            </SimpleCollapse>

            <SimpleCollapse headerContent="I am rounded" rounded>
                <p>This content has rounded corners</p>
            </SimpleCollapse>
        </div>
    );
}

```