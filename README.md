# The MetaMask Stack

A composable boilerplate for writing Ethereum dapps in a similar environment to what the MetaMask developers use themselves to develop MetaMask.

Forked from my older [react-hyperscript-beefy-boilerplate](https://github.com/flyswatter/react-hyperscript-beefy-es6-boilerplate), which is not Ethereum specific.

## Features

- Adds an instantiated [ethjs](https://github.com/ethjs/ethjs) object onto the state object for easy ethereum interaction.
- Uses [react-hyperscript](https://www.npmjs.com/package/react-hyperscript) with [Babel](https://www.npmjs.com/package/Babel) for an Elm-like Javascript ES6 experience.
- The sample project detects presence of the web3 API, and suggests downloading MetaMask in its absence.
- Features a simple tip button transaction, to show how easy it is to send a transaction and indicate loading state and errors.

## Usage

To run:

`npm start`

To build:

`browserify index.js -o bundle.js`

Then just include `bundle.js` in an HTML file.

## Project Structure

./app
├── components
│   ├── download-metamask.js    <- A sample local React component, with customized style params!
│   └── template.js             <- Copy this to create your own components
├── root.js                     <- The home page, which could host routing.
└── template.js                 <- Copy this to create views with full app state access.
./lib
├── reducers
│   └── index.js                <- The root React Redux reducer file.
├── index.html                  <- The entry point for the app
├── index.html                  <- The JS init entry point for the app, unbuilt.
└── store.js                    <- The redux store, instantiated with thunk and logging.

## To Dos:

-[ ] Add nice style sheet management, like SASS.
-[ ] Add unit test suite
-[ ] Add browser test suite (testem?)
