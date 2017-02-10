# The MetaMask Stack

An composable boilerplate for writing Ethereum dapps in a similar environment to what the MetaMask developers use themselves to develop MetaMask.

Forked from my older [react-hyperscript-beefy-boilerplate](https://github.com/flyswatter/react-hyperscript-beefy-es6-boilerplate), which is not Ethereum specific.

## Features

- Adds an instantiated [ethjs](https://github.com/ethjs/ethjs) object onto the state object for easy ethereum interaction.
- Uses [react-hyperscript](https://www.npmjs.com/package/react-hyperscript) with [Babel](https://www.npmjs.com/package/Babel) for an Elm-like Javascript ES6 experience.

## Usage

To run:

`npm start`

To build:

`browserify index.js -o bundle.js`

Then just include `bundle.js` in an HTML file.
