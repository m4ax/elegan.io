import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// imgaes
import logo from 'assets/images/logo.png';

const Footer1 = () => {
    
    return (
        <section className="mt-lg-5 pt-5 pb-4 bg-gradient3 position-relative">
            <Container>
                <Row>
                    <Col xl={8}>
                        <Link className="navbar-brand me-lg-4 mb-4 me-auto d-flex align-items-center pt-0" to="#">
                            <img src={logo} height="30" alt="" />
                        </Link>
                        <p className="text-muted w-75">
                        Data migration automation.
                        </p>
                        <br></br>
                        <p className="text-muted">hello@elegan.io</p>
                    </Col>
                    <Col xl="auto" lg={6} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 fs-14 fw-semibold text-uppercase"> Platform</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <a href="https://calendly.com/elegan/discover" className="text-muted">
                                        Demo
                                    </a>
                                </li>
                                <li className="my-3">
                                    <a href="/importer#pricing" className="text-muted">
                                        Pricing
                                    </a>
                                </li>
                                <li className="my-3">
                  <a href="/importer#integrations" className="text-muted">
                    Integrations
                  </a>
                </li>
                                {/* <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Status
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </Col>
                    <Col xl="auto" lg={3} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 fs-14 fw-semibold text-uppercase">Knowledge Base</h6>
                            <ul className="list-unstyled">
                                {/* <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Blog
                                    </Link>
                                </li> */}
                                <li className="my-3">
                                    <Link to="/docs/introduction" className="text-muted">
                                        Help Center
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="/docs/introduction" className="text-muted">
                                        API
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    {/* <Col xl="auto" lg={3} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 fs-14 fw-semibold text-uppercase">Legal</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Usage Policy
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Terms of Service
                                    </Link>
                                </li>
        
                            </ul>
                        </div>
                    </Col> */}
                </Row>
                <hr />
                <Row className="text-md-start text-center">
                    <Col md={8}>
                        <p className="pb-0 mb-0 text-muted">
                            {new Date().getFullYear()} © Elegan Limited. All rights reserved.
                        </p>
                    </Col>
                    {/* <Col md={4} className="text-md-end">
                        <div className="align-items-end mt-md-0 mt-4">
                            <ul className="list-unstyled mb-0">
                                <li className="d-inline-block me-4">
                                    <Link to="#">
                                        <FeatherIcon icon="facebook" className="icon icon-xs" />
                                    </Link>
                                </li>
                                <li className="d-inline-block me-4">
                                    <Link to="#">
                                        <FeatherIcon icon="twitter" className="icon icon-xs" />
                                    </Link>
                                </li>
                                <li className="d-inline-block">
                                    <Link to="#">
                                        <FeatherIcon icon="linkedin" className="icon icon-xs" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </section>
    );
};

export default Footer1;
