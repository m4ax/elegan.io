import { Link } from 'react-router-dom';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const Hero5 = () => {
    return (
        <section className="position-relative hero-5 pb-4 pt-7 pb-sm-0 hero-with-shapes">
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape3"></div>

            <Container className="position-relative zindex-1">
                <Row className="align-items-center">
                    <Col lg={12}>
                        <div
                            className="rounded d-inline-block mb-4 px-3 py-2 alert bg-purp"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <Link to="#">
                                <div className="d-flex align-items-center">
                                    <Badge pill bg="under" className="px-2 py-1">
                                        New!
                                    </Badge>
                                    <div className="mx-3">Check our latest article on onboarding</div>
                                </div>
                            </Link>
                        </div>

                        <h1 className="hero-title fw-medium">
                           You can make data importing{' '}
                            <span className="highlight highlight-under d-inline-block"> painless.</span>
                        </h1>

                        <p className="mt-4 fs-18 mb-3 mb-sm-6 w-75">
                            Your customers should not have to work to use your product. Make it easy for them. Your competitors are making it easier to use their products. You should too.
                        </p>

                        <Link to="#" className="btn btn-secondary">
                            <FeatherIcon icon="arrow-down" className="icon-xxs me-2" />
                            Try Yourself
                        </Link>

                        <Link to="#" className="btn btn-outline-secondary ms-2">
                            Learn More
                        </Link>
                    </Col>
                </Row>
            </Container>

            <div className="align-items-end links-social d-sm-block d-none">
                <ul className="list-inline text-muted text-uppercase fw-medium">
                    <li className="list-inline-item py-2">
                        <Link to="#">Twitter</Link>
                    </li>
                    <li className="list-inline-item py-2">
                        <Link to="#">Facebook</Link>
                    </li>
                    <li className="list-inline-item py-2">
                        <Link to="#">Instagram</Link>
                    </li>
                </ul>
            </div>

            <div className="shape bottom">
                <svg
                    width="1440px"
                    height="40px"
                    viewBox="0 0 1440 40"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="shape-b" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="curve" fill="#fff">
                            <path
                                d="M0,30.013 C239.659,10.004 479.143,0 718.453,0 C957.763,0 1198.28,10.004 1440,30.013 L1440,40 L0,40 L0,30.013 Z"
                                id="Path"
                            ></path>
                        </g>
                    </g>
                </svg>
            </div>
        </section>
    );
};

export default Hero5;
