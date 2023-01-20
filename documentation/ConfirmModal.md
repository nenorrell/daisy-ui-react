⬅️ [Back to component index](README.md)

# ConfirmModal

The `ConfirmModal` component is a reusable confirm modal component that can be used to create various types of confirm modals, such as delete confirmations and form submission confirmations.

It is built on top of the [ModalFrame Component](ModalFrame.md)

For Modal styling specifics, please see: https://daisyui.com/components/modal/

## Props

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | string | optional |  | The id of the modal element. |
| `className` | string | optional |  | The class name to apply on the modal element. |
| `variant` | string | optional | "neutral" | The color variant of the modal. |
| `isOpen` | boolean | required |  | Indicates whether the modal is open or closed. |
| `position` | string | optional | "middle" | The position of the modal. The options are "bottom" and "middle". |
| `closeButtonVariant` | string | optional |  | The variant of the close button. |
| `closeButtonText` | string | optional | "Close" | The text to be displayed on the close button. |
| `confirmButtonVariant` | string | optional |  | The variant of the confirm button. |
| `confirmButtonText` | string | optional | "Confirm" | The text to be displayed on the confirm button. |
| `confirmHandler` | function | required |  | A callback function to handle the confirm event of the modal. |
| `cornerClose` | boolean | optional | false | Indicates whether to show the close button on the top right corner of the modal. |
| `overlayClose` | boolean | optional | true | Indicates whether to close the modal when the overlay is clicked. |


## Examples

```javascript
import { ConfirmModal } from 'daisy-ui-react-components';

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleConfirm = () => {
    // handle confirmation logic
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show Confirm Modal</button>
      <ConfirmModal 
        isOpen={showModal} 
        closeHandler={() => setShowModal(false)} 
        confirmHandler={handleConfirm}
        confirmButtonText="Delete"
        confirmButtonVariant="danger"
      >
        Are you sure you want to delete this item?
      </ConfirmModal>
    </div>
  );
}
```
