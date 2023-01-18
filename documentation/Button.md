⬅️ [Back to component index](README.md)

## Button

Use Daisy's custom button styles with support for multiple sizes, states, and more.

For styling specifics, see: https://daisyui.com/components/button/

### Props

| Prop        | Type                                            | Default | Description                                                                                             |
|-------------|-------------------------------------------------|---------|---------------------------------------------------------------------------------------------------------|
| `buttonText`| `string`                                        | `""`    | The text to be displayed on the button.                                                                  |
| `size`      | `"small"`, `"medium"`, `"large"`                | `"medium"` | The size of the button.                                                                                 |
| `className` | `string`                                        | `""`    | Custom classes to apply to the button.                                                                |
| `variant`   | `"neutral"`, `"primary"`, `"secondary"`, `"danger"`| `"neutral"` | The color variant of the button.                                                                        |
| `onClick`   | `MouseEventHandler`                             | `undefined`| Function to be executed when the button is clicked.                                                      |
| `isGhost`   | `boolean`                                       | `false` | If true, the button will have a ghost style.                                                           |
| `isLink`    | `boolean`                                       | `false` | If true, the button will have a link style.                                                            |
| `isOutline` | `boolean`                                       | `false` | If true, the button will have an outline style.                                                        |
| `isDisabled`| `boolean`                                       | `false` | If true, the button will be disabled.                                                                  |
| `isGlass`   | `boolean`                                       | `false` | If true, the button will have a glass style.                                                           |
| `isLoading` | `boolean`                                       | `false` | If true, the button will have a loading spinner.                                                       |
| `noAnimation`| `boolean`                                      | `false` | If true, the button will not have animation.                                                           |
| `shape`     | `"circle"`, `"square"`                          | `"square"` | The shape of the button.                                                                                |

### Examples

```javascript
import { Button } from 'daisy-ui-react-components';
import { IconArrowRight } from '@heroicons/react';

<Button size="large" variant="primary" className="custom-class">Click me</Button>

<Button isGhost={true} isLink isOutline isDisabled isGlass isLoading noAnimation shape="circle">Click me</Button>

<Button onClick={() => console.log('Button clicked')}>
  Next
  <IconArrowRight className="w-5 h-5"/>
</Button>
```