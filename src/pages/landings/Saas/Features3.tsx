import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

const Features3 = () => {
    return (
        <section className="position-relative pb-6 pt-lg-6 pt-4 features-3">
            <Container data-aos="fade-up" data-aos-duration="500">
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <h3 className="fw-medium mb-5">Instantly accept new customer data</h3>
                    </Col>
                </Row>

                <Row>
                    <Col lg={3} md={6}>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Plug & play solution
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            White labelling
                        </h6>
                    </Col>
                    <Col lg={3} md={6}>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Improve first impressions
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                           
                            Reduce customer journey
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Scale with AI
                        </h6>
                    </Col>
                    <Col lg={3} md={6}>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Improve conversion rates
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Reduce abandonments
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            No dev time
                        </h6>
                    </Col>
                    <Col lg={3} md={6}>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Retain data control
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Custom functions
                        </h6>
                    </Col>
                </Row>
                <Row className="mt-5 justify-content-center">
                    <Col xs="auto">
                        <Link to="#" className="btn btn-primary mb-2">
                            Sign Up Now <FeatherIcon className="icon-xs ms-2" icon="arrow-right" />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features3;
