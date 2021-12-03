import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'
import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {
  // use React Hooks to store greeting in component state
  const [greeting, set_greeting] = React.useState()
  const [quote, setQuote] = React.useState('')
  const data = [
    {
      image:
        'https://images.unsplash.com/photo-1494253188410-ff0cdea5499e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      quote:
        'I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.',
      author: '- Nelson Mandela -',
    },
    {
      image:
        'https://images.unsplash.com/photo-1476990789491-712b869b91a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
      quote: 'Do one thing every day that scares you.',
      author: '- Eleanor Roosevelt -',
    },
    {
      image:
        'https://images.unsplash.com/photo-1589806567522-18564e9cf0bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      quote:
        'The pessimist complains about the wind. The optimist expects it to change. The leader adjusts the sails.',
      author: '- John Maxwell -',
    },
    {
      image:
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      quote:
        "The way a team plays as a whole determines its success. You may have the greatest bunch of individual stars in the world, but if they do not play together, the club won't be worth a dime.",
      author: '',
    },
    {
      image:
        'https://images.unsplash.com/photo-1634945833919-0edbcbf148fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      quote:
        "Don't let the noise of others' opinions drown out your own inner voice.",
      author: '- Steve Jobs -',
    },
  ]

  // Add getQuote function


  // The useEffect hook can be used to fire side-effects during render
  // Learn more: https://reactjs.org/docs/hooks-intro.html
  React.useEffect(
    () => {
      // in this case, we only care to query the contract when signed in
      if (window.walletConnection.isSignedIn()) {
        // window.contract is set by initContract in index.js
        window.contract
          .get_greeting({ account_id: window.accountId })
          .then((greetingFromContract) => {
            set_greeting(greetingFromContract)
          })
      }
    },
    // The second argument to useEffect tells React when to re-run the effect
    // Use an empty array to specify "only run on first render"
    // This works because signing into NEAR Wallet reloads the page
    [],
  )

  // if not signed in, return early with sign-in prompt
  if (!window.walletConnection.isSignedIn()) {
    return (
      <main>
        <h1>Welcome to NEAR!</h1>
        <p>
          To make use of the NEAR blockchain, you need to sign in. The button
          below will sign you in using NEAR Wallet.
        </p>
        <p>
          By default, when your app runs in "development" mode, it connects to a
          test network ("testnet") wallet. This works just like the main network
          ("mainnet") wallet, but the NEAR Tokens on testnet aren't convertible
          to other currencies – they're just for testing!
        </p>
        <p>Go ahead and click the button below to try it out:</p>
        <p style={{ textAlign: 'center', marginTop: '2.5em' }}>
          <button onClick={login}>Sign in</button>
        </p>
      </main>
    )
  }

  return (
    <div className="main-container">
      <div className="big-cointainer">
        <button className="link" style={{ color: 'white' }} onClick={logout}>
          Welcome back {window.accountId}!
        </button>
        <button
          className="link"
          style={{ float: 'right', color: 'white' }}
          onClick={logout}
        >
          Sign out
        </button>

        {/* Add  Quote to be display*/}
        

      </div>
    </div>
  )
}
