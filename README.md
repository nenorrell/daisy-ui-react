# Daisy UI React components

[![codecov](https://codecov.io/gh/nenorrell/daisy-ui-react/branch/master/graph/badge.svg?token=5BVSFNKS43)](https://codecov.io/gh/nenorrell/daisy-ui-react) [![CI](https://github.com/nenorrell/daisy-ui-react/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/nenorrell/daisy-ui-react/actions/workflows/ci.yml)


<img src="https://raw.githubusercontent.com/nenorrell/files/master/daisy-ui-react/public/logo_no_bg.png" />


This library is designed to simplify the integration of Daisy UI into React projects by providing a set of pre-built React components. The API and functionality of these components are heavily influenced by popular libraries such as React Bootstrap, making it easy for developers familiar with those libraries to work with Daisy UI.

## Alpha
**WARNING**: This library is still in alpha, so components are subject to change

## Component Documentation

See docs at: [Daisy UI React Component Documentation](https://github.com/nenorrell/daisy-ui-react/wiki)

## Installation & Setup

- First thing's first, you'll need to follow Daisy UI's install directions here: https://daisyui.com/docs/install/
- Next install the components package: `npm install daisy-ui-react-components`
- Then we just need to wire the components up with Tailwind by modifying the [content](https://tailwindcss.com/docs/content-configuration) config object like below, and we should be in business:

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

## Contributing
For contributing to this project, please see [Contributing Guidelines](https://github.com/nenorrell/daisy-ui-react/blob/master/CONTRIBUTING.md)