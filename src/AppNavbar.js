import React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {Route, Link} from 'react-router-dom';

const NavItemRoute = ({to, exact, children}) =>
    <Route path={to} exact={exact}>
        {({match}) =>
            <NavItem>
                <NavLink active={!!match} tag={Link} to={to}>{children}</NavLink>
            </NavItem>
        }
    </Route>;

class AppNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {open: false};
    }

    render() {
        return <Navbar color="faded" light toggleable="xs">
            <NavbarToggler right onClick={() => this.setState({open: !this.state.open})}/>
            <NavbarBrand>Encore Prototype</NavbarBrand>
            <Collapse isOpen={this.state.open} navbar>
                <Nav navbar>
                    {this.props.children}
                </Nav>
            </Collapse>
        </Navbar>
    }
}

export {NavItemRoute as NavItem};
export default AppNavbar;
