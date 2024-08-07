import { Nav, Dropdown, Row, Col } from 'react-bootstrap';
import { NavLink, Link, useLocation } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

type MenuProps = {
    showDownload?: boolean;
    navClass?: string;
    buttonClass?: string;
    loggedInUser?: {};
};

const Menu = ({ navClass, buttonClass, showDownload, loggedInUser }: MenuProps) => {
    let location = useLocation();

    const isActiveRoute = (path: string) => {
        if (location.pathname) {
            return location.pathname.includes(path);
        }
        return false
    };

    return (
        <Nav as="ul" className={classNames('align-items-lg-center', navClass)}>
            <Nav.Item as="li">
                <NavLink to="/embed-csv-importer" end className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                    Data importer
                </NavLink>
            </Nav.Item>
            {/* <Nav.Item as="li">
                <NavLink to="/landing/marketing" end className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                    Use cases
                </NavLink>
            </Nav.Item> */}
            {/* <Dropdown as={'li'} className="nav-item">
                <Dropdown.Toggle
                    as={Nav.Link}
                    id="navbarLandings"
                    className={classNames(isActiveRoute('/landing') ? 'active' : '')}
                >
                    Landings{' '}
                    <FeatherIcon icon="chevron-down" className="d-inline-block icon icon-xxs ms-1 mt-lg-0 mt-1" />
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-lg" renderOnMount>
                    <Row className="mx-0">
                        <Col md={6} className="p-lg-0">
                            <label className="nav-title fw-semibold fs-14 text-dark text-uppercase mb-3">Web</label>
                            <Nav as="ul" navbar={false}>
                                <Nav.Item as="li">
                                    <NavLink
                                        to="/landing/app"
                                        end
                                        className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}
                                    >
                                        <div className="d-flex align-items-center">
                                            <span className="bg-soft-primary text-primary avatar avatar-xs shadow rounded icon icon-with-bg icon-xxs me-3 flex-shrink-0">
                                                <FeatherIcon icon="smartphone" className="icon-dual-primary" />
                                            </span>
                                            <div className="flex-grow-1">App</div>
                                        </div>
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <NavLink
                                        to="/landing/saas"
                                        end
                                        className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}
                                    >
                                        <div className="d-flex align-items-center">
                                            <span className="bg-soft-success text-success avatar avatar-xs shadow rounded icon icon-with-bg icon-xxs me-3 flex-shrink-0">
                                                <FeatherIcon icon="monitor" className="icon-dual-success" />
                                            </span>
                                            <div className="flex-grow-1">Saas Modern</div>
                                        </div>
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <NavLink
                                        to="/landing/saas2"
                                        end
                                        className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}
                                    >
                                        <div className="d-flex align-items-center">
                                            <span className="bg-soft-info text-info avatar-xs shadow rounded icon icon-with-bg icon-xxs me-3 flex-shrink-0">
                                                <FeatherIcon icon="airplay" className="icon-dual-info" />
                                            </span>
                                            <div className="flex-grow-1">Saas Classic</div>
                                        </div>
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <NavLink
                                        to="/landing/startup"
                                        end
                                        className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}
                                    >
                                        <div className="d-flex align-items-center">
                                            <span className="bg-soft-orange text-orange avatar avatar-xs shadow rounded icon icon-with-bg icon-xxs me-3 flex-shrink-0">
                                                <FeatherIcon icon="activity" className="icon-dual-orange" />
                                            </span>
                                            <div className="flex-grow-1">Startup</div>
                                        </div>
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <NavLink
                                        to="/landing/software"
                                        end
                                        className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}
                                    >
                                        <div className="d-flex align-items-center">
                                            <span className="bg-soft-warning text-warning avatar avatar-xs shadow rounded icon icon-with-bg icon-xxs me-3 flex-shrink-0">
                                                <FeatherIcon icon="box" className="icon-dual-warning" />
                                            </span>
                                            <div className="flex-grow-1">Software</div>
                                        </div>
                                    </NavLink>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={6} className="p-lg-0">
                            <label className="nav-title fw-semibold fs-14 text-dark text-uppercase mb-3">
                                Services
                            </label>
                            <Nav as="ul" navbar={false}>
                                <Nav.Item as="li">
                                    <NavLink
                                        to="/landing/agency"
                                        end
                                        className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}
                                    >
                                        <div className="d-flex align-items-center">
                                            <span className="bg-soft-secondary text-secondary avatar avatar-xs shadow rounded icon icon-with-bg icon-xxs me-3 flex-shrink-0">
                                                <FeatherIcon icon="framer" className="icon-dual-secondary" />
                                            </span>
                                            <div className="flex-grow-1">Agency</div>
                                        </div>
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <NavLink
                                        to="/landing/coworking"
                                        end
                                        className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}
                                    >
                                        <div className="d-flex align-items-center">
                                            <span className="bg-soft-info text-info avatar avatar-xs shadow rounded icon icon-with-bg icon-xxs me-3 flex-shrink-0">
                                                <FeatherIcon icon="home" className="icon-dual-info" />
                                            </span>
                                            <div className="flex-grow-1">Coworking</div>
                                        </div>
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <NavLink
                                        to="/landing/crypto"
                                        end
                                        className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}
                                    >
                                        <div className="d-flex align-items-center">
                                            <span className="bg-soft-orange text-orange avatar avatar-xs shadow rounded icon icon-with-bg icon-xxs me-3 flex-shrink-0">
                                                <FeatherIcon icon="bold" className="icon-dual-orange" />
                                            </span>
                                            <div className="flex-grow-1">Crypto</div>
                                        </div>
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <NavLink
                                        to="/landing/marketing"
                                        end
                                        className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}
                                    >
                                        <div className="d-flex align-items-center">
                                            <span className="bg-soft-primary text-primary avatar avatar-xs shadow rounded icon icon-with-bg icon-xxs me-3 flex-shrink-0">
                                                <FeatherIcon icon="mail" className="icon-dual-primary" />
                                            </span>
                                            <div className="flex-grow-1">Marketing</div>
                                        </div>
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <NavLink
                                        to="/landing/portfolio"
                                        end
                                        className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}
                                    >
                                        <div className="d-flex align-items-center">
                                            <span className="bg-soft-danger text-danger avatar avatar-xs shadow rounded icon icon-with-bg icon-xxs me-3 flex-shrink-0">
                                                <FeatherIcon icon="image" className="icon-dual-danger" />
                                            </span>
                                            <div className="flex-grow-1">Portfolio</div>
                                        </div>
                                    </NavLink>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                </Dropdown.Menu>
            </Dropdown> */}
            <Dropdown as={'li'} className="nav-item">
                <Dropdown.Toggle
                    as={Nav.Link}
                    id="navbarPages"
                    className={classNames(isActiveRoute('/pages') ? 'active' : '')}
                >
                    Use cases <FeatherIcon icon="chevron-down" className="d-inline-block icon icon-xxs ms-1 mt-lg-0 mt-1" />
                </Dropdown.Toggle>



                <Dropdown.Menu renderOnMount>
                    <Nav as={'ul'} navbar={false}>


                        <Nav.Item as="li">
                        <NavLink
                                            to="/data-importing/asset-management-system"
                                            end
                                            className={classNames(
                                                'nav-link',
                                                ({ ...isActive }) => isActive && 'active'
                                            )}
                                        >
                                           Asset Data
                                        </NavLink>
                        </Nav.Item>
                                                                        <Nav.Item as="li">
                        <NavLink
                                            to="/data-importing/customer-data"
                                            end
                                            className={classNames(
                                                'nav-link',
                                                ({ ...isActive }) => isActive && 'active'
                                            )}
                                        >
                                           Customer Data
                                        </NavLink>
                        </Nav.Item>
                                                            <Nav.Item as="li">
                        <NavLink
                                            to="/data-importing/hr-software"
                                            end
                                            className={classNames(
                                                'nav-link',
                                                ({ ...isActive }) => isActive && 'active'
                                            )}
                                        >
                                           Employee Data
                                        </NavLink>
                                </Nav.Item>
                                                                                      <Nav.Item as="li">
                        <NavLink
                                            to="/data-importing/financial-system"
                                            end
                                            className={classNames(
                                                'nav-link',
                                                ({ ...isActive }) => isActive && 'active'
                                            )}
                                        >
                                           Financial Data
                                        </NavLink>
                        </Nav.Item>
                        <Nav.Item as="li">
                        <NavLink
                                            to="/data-importing/order-fulfilment"
                                            end
                                            className={classNames(
                                                'nav-link',
                                                ({ ...isActive }) => isActive && 'active'
                                            )}
                                        >
                                           Order Data
                                        </NavLink>
                                </Nav.Item>
                                        <Nav.Item as="li">
                        <NavLink
                                            to="/data-importing/sales-software"
                                            end
                                            className={classNames(
                                                'nav-link',
                                                ({ ...isActive }) => isActive && 'active'
                                            )}
                                        >
                                           Sales Data
                                        </NavLink>
                                </Nav.Item>

   



                        {/* <Nav.Item as="li">
                            <hr className="my-2" />
                        </Nav.Item>

                        <Nav.Item as="li">
                            <NavLink
                                to="/pages/help"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}
                            >
                                Help
                            </NavLink>
                        </Nav.Item> */}
                    </Nav>
      
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={'li'} className="nav-item">
                <Dropdown.Toggle
                    as={Nav.Link}
                    id="navbarDocs"
                    className={classNames(
                        isActiveRoute('/docs/introduction') ||
                            isActiveRoute('/docs/bootstrap') ||
                            isActiveRoute('/docs/change-log')
                            ? 'active'
                            : ''
                    )}
                >
                    Docs <FeatherIcon icon="chevron-down" className="d-inline-block icon icon-xxs ms-1 mt-lg-0 mt-1" />
                </Dropdown.Toggle>

                <Dropdown.Menu renderOnMount>
                    <Nav as={'ul'} navbar={false}>
                        <Nav.Item as="li">
                            <NavLink
                                to="/docs/introduction"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}
                            >
                                Tutorial
                            </NavLink>
                        </Nav.Item>
                       
                        <Nav.Item as="li">
                            <hr className="my-2" />
                        </Nav.Item>
                        <Nav.Item as="li">
                            <NavLink
                                to="/docs/change-log"
                                end
                                className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}
                            >
                                Change Log
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                </Dropdown.Menu>
            </Dropdown>

            {showDownload && (
                <>
                    {loggedInUser ? (
                        <Nav.Item as="li">
                            <NavLink to="/auth/logout" className="nav-link btn me-2 shadow-none">
                                Logout
                            </NavLink>
                        </Nav.Item>
                    ) : (
                        <Nav.Item as="li">
                            <NavLink to="/auth/login" className="nav-link btn me-2 shadow-none">
                                Log In
                            </NavLink>
                        </Nav.Item>
                    )}

                    <Nav.Item as="li">
                        <Link to="#" className={classNames('btn', buttonClass)}>
                            Download
                        </Link>
                    </Nav.Item>
                </>
            )}
        </Nav>
    );
};

export default Menu;
