⬅️ [Back to component index](README.md)

# ModalFrame

The `ModalFrame` component is a reusable modal component that can be used to create various types of modals.

For Modal styling specifics, please see: https://daisyui.com/components/modal/

## Props

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | string | optional |  | The id of the modal element. |
| `className` | string | optional |  | The class name to apply on the modal element. |
| `variant` | string | optional | "neutral" | The color variant of the modal. |
| `isOpen` | boolean | required |  | Indicates whether the modal is open or closed. |
| `position` | string | optional | "middle" | The position of the modal. The options are "bottom" and "middle". |
| `closeHandler` | function | required |  | A callback function to handle the close event of the modal. |
| `cornerClose` | boolean | optional | false | Indicates whether to show the close button on the top right corner of the modal. |
| `overlayClose` | boolean | optional | true | Indicates whether to close the modal when the overlay is clicked. |

## Examples

```javascript
import { ModalFrame } from 'daisy-ui-react-components';

function MyModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalFrame
      isOpen={isOpen}
      variant="danger"
      position="bottom"
      closeHandler={() => setIsOpen(false)}
      cornerClose={true}
      overlayClose={false}
    >
      <div>My modal content</div>
      <div className="modal-action">
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </div>
    </ModalFrame>
  );
}
```
