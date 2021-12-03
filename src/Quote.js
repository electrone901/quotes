import React, { useState } from 'react'
export const Quote = ({ getQuote, quote }) => {
  return (
    <div className="container">
      <div className="intro">
        <p className="sub-header">
          Whether you're going through hard times, need an extra push to get
          stuff done, or like sharing inspirational quotes, we have you covered.
        </p>
        <button onClick={getQuote}>Get Your Daily Motivation</button>
      </div>
      {/* {quote ? (
        <div className="intro">
          <p className="sub-header">{quote.quote}</p>
          <p className="author">{quote.author}</p>
          <button onClick={getQuote}>Get Another One</button>
        </div>
      ) : (
        <div className="intro">
          <p className="sub-header">
            Whether you're going through hard times, need an extra push to get
            stuff done, or like sharing inspirational quotes, we have you
            covered.
          </p>
          <button onClick={getQuote}>Get Your Daily Motivation</button>
        </div>
      )} */}
    </div>
  )
}
