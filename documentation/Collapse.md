⬅️ [Back to component index](README.md)

# Collapse

A collapsible container used for showing and hiding content.

### Props

| Prop               | Type                    | Default     | Description                                                                 |
| ------------------ | ----------------------- | ----------- | --------------------------------------------------------------------------- |
| `className`        | `string`                | `""`        | Custom classname to apply to the collapse container.                        |
| `defaultExpand`    | `boolean`               | `false`     | Determines whether the collapse should be expanded by default.              |
| `headerContent`    | `string` or `ReactNode` |             | The content for the collapse header.                                        |
| `headerClasses`    | `string`                | `""`        | Additional classname to apply to the collapse header.                       |
| `leftIcon`         | `ComponentOrJSX`        | `undefined` | The left icon for the collapse header.                                      |
| `leftIconClasses`  | `string`                | `""`        | Additional classname to apply to the left icon.                             |
| `rightIcon`        | `ComponentOrJSX`        | `undefined` | The right icon for the collapse header.                                     |
| `rightIconClasses` | `string`                | `""`        | Additional classname to apply to the right icon.                            |
| `parentCollapse`     | `boolean`               | `false`     | This is for when you're using nested collapses. Unfortunately, the expand animation does not currently work great for nested collapses. Marking this as true will mark this collapse as a parent & will disable the smooth expand for it (the parent) but will still allow for smooth expand for the children collapses.          |
| `rounded`          | `boolean`               | `false`     | Determines whether the collapse should have rounded corners or not.         |
| `onClick`          | `Function`              | `undefined` | Callback function that will be invoked when the collapse header is clicked. |


### Notes

* The `onClick` is only available on the headerContent and it will be called when the header is clicked
* Nested collapses are a little finnicky as things currently stand. Please see `parentCollapse` above for more details


### Examples

```javascript
import { Collapse } from 'daisy-ui-react-components';

function MyComponent() {
  const handleClick = e => {
    console.log('Collapse header clicked', e);
  }

  return (
    <div>
      <Collapse
        className="w-1/2"
        headerContent="Hello"
        headerClasses="bg-base-200 rounded-t-md"
        leftIcon={<FontAwesomeIcon icon={faGitlab} />}
        rightIcon={ArrowDownIcon}
      >
        <div className="bg-base-300">
          <p className="p-4">Hey everyone</p>
        </div>
      </Collapse>

      <Collapse headerContent="Click me to expand/collapse" onClick={handleClick}>
        <p>This is some expandable content</p>
      </Collapse>

      <Collapse headerContent="Click me to expand/collapse" >
        <p>This is some expandable content</p>
      </Collapse>

      <Collapse headerContent="Click me to expand/collapse" defaultExpand={true}>
        <p>This is some expandable content that is expanded by default</p>
      </Collapse>

      <Collapse headerContent={<div>Custom header content</div>} leftIcon={<MyCustomIcon />} className="my-custom-class">
        <p>This is some expandable content with custom header content and a custom left icon</p>
      </Collapse>
    </div>
  )
}
```