import { Col, Container, Row, Button } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// components
import { FormInput } from '../form';
import SwiperSlider3 from '../sliders/SwiperSlider3';

const Hero12 = () => {
    return (
        <section className="position-relative overflow-hidden hero-13 pt-7 pt-lg-5 pb-6">
            <Container>
                <Row className="align-items-center text-center text-sm-start">
                    <Col lg={6}>
                        <div className="mb-lg-0 mb-5">
                            <h1 className="hero-title">
                                 Data importing{' '}
                                <span className="highlight highlight-under d-inline-block">automation</span> for csv
                            </h1>
                            <p className="fs-17 text-muted pt-3">
              
                            Your customer's data is in a different format. We automatically convert it. Don't make them do it.
                            </p>

                            <div className="pt-5">
                                <Row className="g-2 text-start">
                                    <Col md={4} lg={6}>
                                        <FormInput
                                            type="email"
                                            className="mb-2 me-sm-2 shadow-sm"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                        />
                                    </Col>
                                    <Col sm={3}>
                                        <div>
                                            <a  href="https://calendly.com/elegan/discover" target="_blank" rel="noreferrer">
                                            <Button className="mb-2">Sign Up</Button>
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="d-flex mt-1 fs-12">
                                <div className="me-4">
                                    <FeatherIcon
                                        icon="check"
                                        className="icon icon-dual-success icon-xs me-1"
                                    ></FeatherIcon>
                                    No setup cost
                                </div>
                                <div>
                                    <FeatherIcon
                                        icon="check"
                                        className="icon icon-dual-success icon-xs me-1"
                                    ></FeatherIcon>
                                    Embed anywhere
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ offset: 1, span: 5 }} className="hero-right">
                        <div className="img-container" data-aos="fade-left" data-aos-duration="1000">
                            <div className="slider">
                                <SwiperSlider3 />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero12;
