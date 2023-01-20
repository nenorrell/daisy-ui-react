⬅️ [Back to component index](README.md)

# Menu

A menu component that can be rendered either horizontally or vertically. Typically used with the [MenuItem component](MenuItem.md) for Menu Items, but will also accept children of any kind.

For styling specifics, please see: https://daisyui.com/components/menu/

## Props

| Name | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| id | string |  |  | The HTML id attribute for the menu |
| className | string |  |  | Additional class names to be added to the menu |
| variant | Variant | "neutral" |  | The variant color of the menu |
| type | "vertical" &#124; "horizontal" | "vertical" |  | The type of menu to be rendered |
| tabIndex | number |  |  | The tabIndex of the menu |
| children | ReactNode |  | Yes | The content to be rendered inside the menu |

## example

```Javascript
import { Menu, MenuItem } from 'daisy-ui-react-components';

const SomeComponent = ()=>{
    return (
        <Menu variant="primary" className="shadow w-52 mt-14 ml-5">
            <MenuItem>Hello</MenuItem>
            <MenuItem>Hello</MenuItem>
            <MenuItem isDisabled>Border</MenuItem>
            <MenuItem>Hello</MenuItem>
        </Menu>
    )
}
```
