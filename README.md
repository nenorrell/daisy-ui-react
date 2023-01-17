# Daisy UI React components
[![codecov](https://codecov.io/gh/nenorrell/daisy-ui-react/branch/master/graph/badge.svg?token=5BVSFNKS43)](https://codecov.io/gh/nenorrell/daisy-ui-react)

Influenced by packages like [React Bootstrap](https://react-bootstrap.github.io/)


Improving the experience of using DaisyUI & React together. The goal of this package is to supply easy to consume Daisy UI out of the box React components. 

There are still no great docs for component usage, but they will be coming soon. In the meantime, these comonents are written entirely in TS and should be fairly intuitive to consume.

## Installation & Setup

- First install the package: `npm install daisy-ui-react-components`
- Next we need to wire the components up with Tailwind by modifying the [content](https://tailwindcss.com/docs/content-configuration) config object like below:

```javascript
module.exports = {
    content: [
        "./node_modules/daisy-ui-react-components/**/*.{js,ts,jsx,tsx}",
        ...
    ],
    plugins: [require("daisyui")],
    daisyui: {...}
};
```

## Component Documentation

Please see [Daisy UI React Component Documentation](https://github.com/nenorrell/daisy-ui-react/blob/master/documentation/README.md) for component specific documentation

## Development
### Starting dev env
- `make run` 
  - (requires Docker)
- Alternatively:
  - `npm start`

### Testing
- `make test`
  - (requires Docker)
- Alternatively:
  - `npm test`

or to skip the install step:
- `make test-fast`
  - (requires Docker)