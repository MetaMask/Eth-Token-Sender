const render = require('react-dom').render
const h = require('react-hyperscript')
const configureStore = require('./lib/store')
const Root = require('./app/root.js')

var body = document.querySelector('body')
const container = document.createElement('div')
body.appendChild(container)

let web3Found = false
window.addEventListener('load', function() {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {

    // Use Mist/MetaMask's provider
    web3Found = true
  }

  // Now you can start your app & access web3 freely:
  startApp()
})

const store = configureStore({
  currentView: 'home',
  nonce: 1,
  web3Found,
})

function startApp(){
  render(
    h(Root, {
      store,
    }),
  container)
}

