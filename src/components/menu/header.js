import React, {useEffect, useState} from "react";
import Breakpoint, {BreakpointProvider, setDefaultBreakpoints} from "react-socks";
import {header} from 'react-bootstrap';
import {Link} from '@reach/router';
import useOnclickOutside from "react-cool-onclickoutside";


setDefaultBreakpoints([
    {xs: 0},
    {l: 1199},
    {xl: 1200}
]);

const NavLink = props => (
    <Link
        {...props}
        getProps={({isCurrent}) => {
            // the object returned here is passed to the
            // anchor element's props
            return {
                className: isCurrent ? 'active' : 'non-active',
            };
        }}
    />
);


const Header = function () {

    const [openMenu, setOpenMenu] = React.useState(false);
    const [openMenu1, setOpenMenu1] = React.useState(false);
    const [openMenu2, setOpenMenu2] = React.useState(false);
    const [openMenu3, setOpenMenu3] = React.useState(false);

    const [showmenu, btn_icon] = useState(false);
    return (
        <header id="myHeader" className='navbar white'>
            <div className='container'>
                <div className='row w-100-nav'>
                    <div className='logo px-0 pt-4 '>
                        <img
                            src="./img/logo.png"
                            className="img-fluid "
                            alt="#"
                            style={{width: 48, height: 48}}
                        />
                        <span > Decentralized collection tools</span>
                    </div>

                    <BreakpointProvider>
                        <Breakpoint xl>
                            <div className='menu'>
                                <div className='navbar-item'>
                                </div>
                                <div className='navbar-item'>
                                </div>
                                <div className='navbar-item'>
                                </div>
                                <div className='navbar-item'>
                                    <NavLink to="/activity">
                                        <span className='lines'></span>
                                    </NavLink>
                                </div>
                                <div className='navbar-item'>
                                </div>
                            </div>
                        </Breakpoint>
                    </BreakpointProvider>

                    {/*<div className='mainside'>*/}
                    {/*    <NavLink to="/wallet" className="btn-main">Connect Wallet</NavLink>*/}
                    {/*</div>*/}

                </div>

            </div>
        </header>
    );
}
export default Header;