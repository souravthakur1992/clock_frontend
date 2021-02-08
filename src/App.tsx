import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Footer from 'pages/footer'
import Home from 'pages/home'
import Header from 'pages/home/Header'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <div
          style={{
            flex: '1 0 auto',
            width: '100%',
            margin: 'auto',
          }}
        >
          <Header />
          <Home />
        </div>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
