import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

// images
import saas2 from 'assets/images/hero/datamap.gif';

const Features2 = () => {
    return (
        <section className="position-relative overflow-hidden py-7 features-3">
            <Container>
                <Row className="align-items-center">
                    <Col lg={5}>
                        <div className="mb-5 mb-lg-0" data-aos="fade-up" data-aos-duration="200">
                            <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary me-3 mb-4">
                                <FeatherIcon icon="clock" className="icon-dual-primary" />
                            </span>
                            <h1 className="text-dark">Data importing can take days, when it should take minutes.</h1>
                            <p className="text-muted my-4">
                                Use Elegan to accept data in any format. We'll handle all the boring stuff.
                                What's important is your customers can use your product straight away.
                            </p>
                            <Link to="#" className="h6 text-primary pt-3">
                                Learn more
                                <FeatherIcon className="ms-1 icon-xxs" icon="arrow-right" />
                            </Link>
                        </div>
                    </Col>

                    <Col lg={{ offset: 1, span: 6 }}>
                        <div className="img-content2 position-relative">
                            <div className="img-up">
                                <img
                                    src={saas2}
                                    alt="app img"
                                    className="img-fluid d-block rounded"
                                    data-aos="fade-left"
                                    data-aos-duration="300"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features2;
