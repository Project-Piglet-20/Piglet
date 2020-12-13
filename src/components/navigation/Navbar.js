import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Background from '../../images/Background.png';

const Navbar = (props) => {
    const curLoc = props.location.pathname.slice(1).toUpperCase();
    return (
        <div>
            <div style={{ paddingBottom: '2vh' }}>
                <nav
                    role="navigation"
                    style={{
                        backgroundImage: `url(${Background})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        height: '40vh'
                    }}
                >
                    <div className="nav-wrapper container">
                        <div>
                            <ul className="hide-on-med-and-down">
                                <span className="left">
                                    <li>
                                        <h5>PIGLET</h5>
                                    </li>
                                </span>
                                <span className="right">
                                    <li>
                                        <Link to="/home">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/report">Report</Link>
                                    </li>
                                </span>
                            </ul>
                            <ul id="nav-mobile" className="sidenav">
                                <li>
                                    <h4 className="deep-orange-text text-accent-3">
                                        PIGLET
                                    </h4>
                                </li>
                                <br />
                                <li className="left">
                                    <Link to="/home">Home</Link>
                                </li>
                                <br />
                                <li className="left">
                                    <Link to="/about">About</Link>
                                </li>
                                <br />
                                <li className="left">
                                    <Link to="/report">Report</Link>
                                </li>
                            </ul>
                            <a
                                href="!#"
                                data-target="nav-mobile"
                                className="sidenav-trigger"
                            >
                                <div>
                                    <span>
                                        <div style={{ fontSize: '20px' }}>
                                            <i className="material-icons left">
                                                menu
                                            </i>
                                            PIGLET
                                        </div>
                                    </span>
                                </div>
                            </a>
                        </div>
                        <br />
                        <div style={{ paddingTop: '20px', fontFamily: 'Ropa Sans' }}>
                            <h1>{!curLoc ? 'REPORT' : curLoc}</h1>
                            <div
                                className="divider red darken-2"
                                style={{ padding: '5px' }}
                            ></div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default withRouter(Navbar);
