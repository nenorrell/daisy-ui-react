⬅️ [Back to component index](README.md)

# MenuItem

A component for creating a menu item within a menu. For usage with the [Menu component](Menu.md)

For styling specifics, please see: https://daisyui.com/components/menu/

## Props
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| id | string | No |  | The id of the element. |
| className | string | No |  | Additional class names to add to the component. |
| isTitle | boolean | No | false | Whether or not the component should have the "menu-title" class added. |
| isActive | boolean | No | false | Whether or not the component should have the "active" class added. |
| onClick | MouseEventHandler | No |  | A function to be called when the component is clicked. |
| isDisabled | boolean | No | false | Whether or not the component should have the "disabled" class added. |
| isBordered | boolean | No | false | Whether or not the component should have the "bordered" class added. |
| hover | boolean | No | false | Whether or not the component should have the "hover-bordered" class added. |
| children | React.ReactElement&#124;string | Yes | - | The content to render inside the component. |


## example

```Javascript
import { Menu, MenuItem } from 'daisy-ui-react-components';

const SomeComponent = ()=>{
    return (
        <Menu variant="primary" className="shadow w-52 mt-14 ml-5">
            <MenuItem isTitle>Test Title</MenuItem>
            <MenuItem isActive><a href="#">Selected item</a></MenuItem>
            <MenuItem isDisabled>Disabled item</MenuItem>
            <MenuItem isBordered>Bordered item</MenuItem>
            <MenuItem hover>hover me</MenuItem>
        </Menu>
    )
}
```