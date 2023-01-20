⬅️ [Back to component index](README.md)

# Badge

Badge component is a simple component used to provide a visual representation of a status or label. For specific styling details, please see https://daisyui.com/components/badge/

## Props

| Property        | Type           | Description  |
| ------------- |:-------------:| :-----|
| size      | `Size` | Size of the Badge component. Accepted values are "xs", "sm", "md", "lg". Default value is "md".|
| className      | `string` | Additional class name for customizing the component. Useful for spacing, sizing, etc|
| variant      | `BaselessVariant` | Color variant of the Badge component. Accepted values are "neutral", "primary", "secondary", "success", "danger", "warning". Default value is "neutral".|
| onClick      | `MouseEventHandler` | Event handler for click event on the component.|
| isGhost      | `boolean` | Changes the component style to a ghost variant.|
| isOutline      | `boolean` | Changes the component style to an outline variant.|

## Example

```Javascript
import { Badge } from 'daisy-ui-react-components';

const SomeComponent = ()=>{
    return (
        <>
            <Badge>Default</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="warning" size="sm" className="mx-2">Warning</Badge>
            <Badge onClick={() => console.log("Badge Clicked!")}>Click me</Badge>
            <Badge variant="warning" isOutline>Outline Warning Badge</Badge>
        </>
    )
}
```