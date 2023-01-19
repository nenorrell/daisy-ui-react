# Modal
A simple modal component that can be used for displaying data, alerts, etc.

For Modal styling specifics, please see: https://daisyui.com/components/modal/

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `id` | string | optional | - | The id of the modal |
| `isOpen` | boolean | required | - | Whether the modal is open or not |
| `closeHandler` | function | required | - | Function to be called when the modal is closed |
| `variant` | string | optional | `"neutral"` | The color variant of the modal |
| `position` | string | optional | `"middle"` | The position of the modal |
| `className` | string | optional | - | Additional className to be added to the modal |
| `cornerClose` | boolean | optional | `false` | Whether the modal should have a close button in the corner or not |
| `overlayClose` | boolean | optional | `true` | Whether the modal should be closed when clicking on the overlay or not |
| `noActionButton` | boolean | optional | `false` | Whether the modal should have a close button in the action section or not |
| `closeButtonVariant` | string | optional | - | The color variant of the close button |
| `closeButtonText` | string | optional | "Close" | The text of the close button |
| `noActionButton` | boolean | optional | - | Whether the modal should not have an action section |

## Example

```javascript
import { Modal } from 'daisy-ui-react-components';

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleConfirm = () => {
    // handle confirmation logic
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show Confirm Modal</button>
      <Modal 
        isOpen={showModal} 
        closeHandler={() => setShowModal(false)} 
      >
        Hello!
      </Modal>
    </div>
  );
}
```
