import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, } from 'reactstrap'
import CartSummary from "../cart/CartSummary";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <Link to="/">
            <NavbarBrand>
              Nothwind Mağazası
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={function noRefCheck() { }} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <Link to="/saveproduct/">
                  <NavLink>
                    Ürün Ekle
                  </NavLink>
                </Link>
              </NavItem>
              <CartSummary />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
