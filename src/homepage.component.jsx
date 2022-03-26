import React from 'react'
import './homepage.styles.scss'

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      {/* HATS MENU */}
      <div className="menu-item">
        <div className="content">
          <h1 className="title">HATS</h1>
          <span className="subtitle">BUY NOW</span>
        </div>
      </div>
      {/* HATS MENU END */}
      {/* HATS MENU */}
      <div className="menu-item">
        <div className="content">
          <h1 className="title">SNEAKERS</h1>
          <span className="subtitle">BUY NOW</span>
        </div>
      </div>
      {/* HATS MENU END */}
      {/* HATS MENU */}
      <div className="menu-item">
        <div className="content">
          <h1 className="title">SHIRTS & PANTS</h1>
          <span className="subtitle">BUY NOW</span>
        </div>
      </div>
      {/* HATS MENU END */}
      {/* WOMENS MENU */}
      <div className="menu-item">
        <div className="content">
          <h1 className="title">WOMENS</h1>
          <span className="subtitle">BUY NOW</span>
        </div>
      </div>
      {/* WOMENS MENU END */}
      {/* MENS MENU */}
      <div className="menu-item">
        <div className="content">
          <h1 className="title">MENS</h1>
          <span className="subtitle">BUY NOW</span>
        </div>
      </div>
      {/* MENS MENU END */}
    </div>
  </div>
)

export default HomePage
