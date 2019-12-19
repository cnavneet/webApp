import React, { Component } from 'react';
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return(
            <React.Fragment>
                <Navbar dark expand = "md">
                    <div className = "container">
                        <NavbarToggler onClick = {this.toggleNav}>
                            <NavbarBrand className = "mr-auto"
                                         href = "\"
                                         >
                                            ICON
                            </NavbarBrand>
                        </NavbarToggler>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;