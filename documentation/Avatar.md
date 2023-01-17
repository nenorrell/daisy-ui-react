⬅️ [Back to component index](README.md)

## Avatar

Avatars are used to show a thumbnail representation of an individual or business in the interface.

For styling specifics, please see: https://daisyui.com/components/avatar/

### Props

| Prop             | Type                                                | Default | Description                                                                                                                                                                                                 |
|------------------|--------------------------------------------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `isPlaceholder`  | `boolean`                                             | `false` | Determines whether the avatar should be a placeholder or not.                                                                                                                                                 |
| `status`         | `"online"` or `"offline"`                             | `undefined` | The status of the avatar. `"online"` or `"offline"`.                                                                                                                                                     |
| `className`      | `string`                                             | `""`    | Custom classes to apply to the avatar.                                                                                                                                                                      |
| `contentClasses` | `string`                                             | `""`    | Additional classes to apply to the content warapper of the avatar. This is typically where you would add sizing & spacing for the avatar                                                                                      |
| `variant`        | `"neutral"`, `"primary"`, `"secondary"`, `"danger"` | `"neutral"` | The color variant of the avatar.                                                                                                                                                                             |
| `onClick`        | `MouseEventHandler`                                  | `undefined`| Function to be executed when the avatar is clicked.                                                                                                                                                           |

### Examples

```javascript
import { Avatar } from 'daisy-ui-react-components';

<Avatar
    className="m-5"
    contentClasses="w-24 rounded-full text-3xl"
    variant="base-300"
    status="offline"
>
    <span>DU</span>
</Avatar>

<Avatar variant="primary">
    <span></span>
</Avatar>

<Avatar status="online" className="custom-class" onClick={() => console.log('Avatar clicked')}>
    <img src="https://i.pravatar.cc/200" alt="avatar" />
</Avatar>