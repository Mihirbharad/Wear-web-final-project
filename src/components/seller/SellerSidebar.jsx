import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { SellerNavbar } from './SellerNavbar'

export const SellerSidebar = () => {
  return (

    <>
    
    <SellerNavbar></SellerNavbar>
    <aside
        className="app-sidebar bg-body-secondary shadow"
        data-bs-theme="dark"
      >
        <div className="sidebar-brand">
          
          <a href="./index.html" className="brand-link">
            
            <img
              src="../../src/assets/img/wearweblogo.png"
              alt="WEAR WEB Logo"
              className="brand-image opacity-75 shadow"
            />
            
            <span className="brand-text fw-light">WEAR WEB</span>
            
          </a>
          
        </div>

        <div
          className=""
          data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"
          tabIndex={-1}
          style={{
            marginRight: "-16px",
            marginBottom: "-16px",
            marginLeft: 0,
            top: "-8px",
            right: "auto",
            left: "-8px",
            width: "calc(100% + 16px)",
            padding: 8,
          }}
        >
          <nav className="mt-2">
            
            <ul
              className="nav sidebar-menu flex-column"
              data-lte-toggle="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <Link to='addproduct' className="nav-link active">
                  <i className="nav-icon bi bi-speedometer" />
                  <p>
                    ADD PRODUCT
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </Link>
              </li>
              <li className="nav-item menu-open">
                <Link to="seldashboard" className="nav-link active">
                  <i className="nav-icon bi bi-speedometer" />
                  <p>
                    Dashboard
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </Link>
              </li>
              </ul>
              
            
            
          </nav>
        </div>
      </aside>
      <main className='app-main'>
        <Outlet></Outlet>
      </main>

    </>
  )
}
