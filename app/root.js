const inherits = require('util').inherits
const Component = require('react').Component
const h = require('react-hyperscript')
const connect = require('react-redux').connect
const Eth = require('ethjs');

const MetaMaskLink = require('./components/download-metamask')

module.exports = connect(mapStateToProps)(AppRoot)

function mapStateToProps (state) {
  return state
}

inherits(AppRoot, Component)
function AppRoot () {
  Component.call(this)
}

AppRoot.prototype.render = function () {
  const props = this.props
  const { eth, loading, nonce, error, web3Found } = props

  return (
    h('.content', {
      style: {
        color: 'grey',
        padding: '15px',
      },
    }, [

      h('h1', `The MetaMask Stack`),

      h('h3', [
        'A quick way to start building Web Dapps on ',
        h('a', {
          href: 'https://ethereum.org/'
        }, 'Ethereum'),
      ]),

      web3Found ?

        h('div', [
          h('You should get MetaMask for the full experience!'),

          h(MetaMaskLink, { style: { width: '250px' } }),
        ])
        : loading ? h('span', 'Loading...') : h('button', {
          onClick: () => this.sendTip(),
        }, 'Tip the developer with Ethereum'),

      h('br'),
      nonce > 0 ? h('h2', `Thanks for your generous ${nonce} tip!`) : null,
      h('br'),
      error ? h('span', { style: { color: '#212121' } }, error) : null,

    ])
  )
}

AppRoot.prototype.sendTip = function() {
  const { eth } = this.props

  this.props.dispatch({ type: 'SHOW_LOADING' })
  eth.sendTransaction({
    from: web3.eth.accounts[0],
    value: Eth.toWei('1', 'ether'),
    // Dan!
    to: '0x55e2780588aa5000F464f700D2676fD0a22Ee160',
    data: null,
  })
  .then((result) => {
    this.props.dispatch({ type: 'HIDE_LOADING' })
    this.props.dispatch({
      type: 'INCREMENT_NONCE',
    })
  })
  .catch(() => {
    this.props.dispatch({ type: 'HIDE_LOADING' })
    this.props.dispatch({
      type: 'SHOW_ERROR',
      value: 'There was a problem!  Maybe you refused the payment?',
    })
  })

}
