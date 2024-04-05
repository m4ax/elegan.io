import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const Hero = () => {
    return (
        <section className="hero-4 pb-5 pt-7 py-sm-7">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={7} className="text-center">
                        <h1 className="hero-title">Order Fulfilment Software</h1>
                    </Col>
                </Row>

                <Row className="border-top border-bottom py-4 align-items-center mt-5">
                    <Col>
                        <span className="fs-14">Daily Time Saved</span>
                        <h4 className="mt-1 fw-medium">10-20 minutes</h4>
                    </Col>
                    <Col>
                        <span className="fs-14">Category</span>
                        <h4 className="mt-1 fw-medium">Order Management</h4>
                    </Col>
                    <Col>
                        <span className="fs-14">File Size</span>
                        <h4 className="mt-1 fw-medium">850 rows</h4>
                    </Col>
                    <Col xs="auto">
                        <ul className="list-inline mb-0 me-3">
                            <li className="list-inline-item text-muted align-middle me-2 text-uppercase fs-13 fw-medium">
                                Share:
                            </li>
                            <li className="list-inline-item me-2 align-middle">
                                <Link to="#">
                                    <FeatherIcon icon="facebook" className="icon-dual-primary icon-xs" />
                                </Link>
                            </li>
                            <li className="list-inline-item me-2 align-middle">
                                <Link to="#">
                                    <FeatherIcon icon="twitter" className="icon-dual-info icon-xs" />
                                </Link>
                            </li>
                            <li className="list-inline-item align-middle">
                                <Link to="#">
                                    <FeatherIcon icon="instagram" className="icon-dual-danger icon-xs" />
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs="auto">
                        <Link to="" className="btn btn-outline-primary">
                            Contact
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
