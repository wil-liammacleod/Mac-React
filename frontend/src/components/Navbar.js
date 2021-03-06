import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
  
  export default class Example extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar className="navbar-color" light expand="md">
            <NavbarBrand tag={Link} to="/">McMaster Esports</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/">Home</NavLink>
                </NavItem>
                {/*
                <NavItem>
                  <NavLink tag={Link} to="/About/">About</NavLink>
                </NavItem>
                */}
                <NavItem>
                  <NavLink tag={Link} to="/Partners/">Partners</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/Teams/">Teams</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/News/">News</NavLink>
                </NavItem>
                {/*
                <NavItem>
                  <NavLink tag={Link} to="/Events/">Events</NavLink>
                </NavItem>
                */}


                <NavItem>
                  <NavLink tag={Link} to="/ContactUs/">ContactUs</NavLink>
                </NavItem>
                {/*
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                */}

              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }