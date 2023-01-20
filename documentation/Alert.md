⬅️ [Back to component index](README.md)

# Alert

Use the alert component to give users feedback on their actions in context with a variety of options.

For styling specifics, please see: https://daisyui.com/components/alert/

## Props

| Prop        | Type                                            | Default | Description                                                                                             |
|-------------|-------------------------------------------------|---------|---------------------------------------------------------------------------------------------------------|
| `className` | `string`                                        | `undefined`    | Custom classes to apply to the alert.                                    |
| `variant`   | `"neutral"`, `"primary"`, `"secondary"`, `"danger"`| `"neutral"` | The color variant of the alert.                  |
| `onClick`   | `MouseEventHandler`                             | `undefined`| Function to be executed when the alert is clicked.                                                      |

## Examples
```javascript
import { Alert } from 'daisy-ui-react-components';

<Alert className="custom-class" onClick={() => console.log('Alert clicked')}>
    This is a warning message
</Alert>