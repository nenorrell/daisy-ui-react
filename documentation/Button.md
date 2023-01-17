## Button

A customizable button component.

### Props

| Prop        | Type                                            | Default | Description                                                                                             |
|-------------|-------------------------------------------------|---------|---------------------------------------------------------------------------------------------------------|
| `buttonText`| `string`                                        | `""`    | The text to be displayed on the button.                                                                  |
| `size`      | `"small"`, `"medium"`, `"large"`                | `"medium"` | The size of the button.                                                                                 |
| `className` | `string`                                        | `""`    | Custom classname to apply to the button.                                                                |
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
import { Button } from './Button';
import { IconArrowRight } from '@heroicons/react';

<Button buttonText="Click me" />

<Button size="large" variant="primary" className="custom-class" />

<Button isGhost={true} isLink isOutline isDisabled isGlass isLoading noAnimation shape="circle" />

<Button onClick={() => console.log('Button clicked')}>
  <IconArrowRight size={20} />
  Next
</Button>
```