import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import desktop1 from 'assets/images/features/desktop1.gif';
import desktop from 'assets/images/hero/desktop.jpg';

const VideoFeature = () => {
    return (
        <section className="position-relative overflow-hidden py-6 features-3">
            <Container>

                <Row className="align-items-center">
                    
                    <Col lg={5}>
                        <div className="mb-lg-0 mb-4" data-aos="fade-right" data-aos-duration="600">
                            <Badge pill bg="" className="badge-soft-danger px-2 py-1">
                                Step 1
                            </Badge>
                            <h1 className="display-5 fw-medium mb-2">Your customer uploads data</h1>
                            <h5 className="fw-normal text-muted mx-auto mt-0 mb-4 pb-3">
                                Any data format accepted!
                            </h5>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="share" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                    No manual work 
                                </div>
                            </div>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="git-merge" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                    Easy drag and drop
                                </div>
                            </div>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="users" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                Any data format allowed
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <img
                            src={desktop1}
                            alt="desktop1"
                            className="img-fluid"
                            data-aos="fade-left"
                            data-aos-duration="700"
                        />
                    </Col>
                </Row>

                <Row className="align-items-center pt-9">
                    <Col lg={6}>
                        <div
                            className="bg-white p-2 rounded border shadow"
                            data-aos="fade-right"
                            data-aos-duration="600"
                        >
                            <img src={desktop} alt="desktop" className="img-fluid" />
                        </div>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <div className="mt-4 mt-lg-0" data-aos="fade-left" data-aos-duration="700">
                            <Badge pill bg="" className="badge-soft-danger px-2 py-1">
                                Step 2
                            </Badge>
                            <h1 className="display-5 fw-medium mb-2">Elegan AI turns their data into your format</h1>
                            <h5 className="fw-normal text-muted mx-auto mt-0 mb-4 pb-3">
                                Client data is automatically transformed. Customer never leaves platform.
                            </h5>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="settings" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                    Instantly accept competitors data format
                                </div>
                            </div>

                            <div className="d-flex mb-3">
                                <div className="list-inliœne-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="git-branch" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                    Scale with artificial intelligence
                                </div>
                            </div>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="command" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                    Clean customer journey
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="align-items-center pt-9">
                    <Col lg={5}>
                        <div className="mb-lg-0 mb-4" data-aos="fade-right" data-aos-duration="600">
                            <Badge pill bg="" className="badge-soft-danger px-2 py-1">
                                Step 3
                            </Badge>
                            <h1 className="display-5 fw-medium mb-2">We'll help fix any errors</h1>
                            <h5 className="fw-normal text-muted mx-auto mt-0 mb-4 pb-3">
                            Reduce customer journey
                            </h5>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="share" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                    Customer never leaves platform 
                                </div>
                            </div>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="git-merge" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                Improve customer experience 
                                </div>
                            </div>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="users" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                Increase conversion rates
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <img
                            src={desktop1}
                            alt="desktop1"
                            className="img-fluid"
                            data-aos="fade-left"
                            data-aos-duration="700"
                        />
                    </Col>
                </Row>

                <Row className="align-items-center pt-9">
                    <Col lg={6}>
                        <div
                            className="bg-white p-2 rounded border shadow"
                            data-aos="fade-right"
                            data-aos-duration="600"
                        >
                            <img src={desktop} alt="desktop" className="img-fluid" />
                        </div>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <div className="mt-4 mt-lg-0" data-aos="fade-left" data-aos-duration="700">
                            <Badge pill bg="" className="badge-soft-danger px-2 py-1">
                                Step 4 
                            </Badge>
                            <h1 className="display-5 fw-medium mb-2">Customer moves forward</h1>
                            <h5 className="fw-normal text-muted mx-auto mt-0 mb-4 pb-3">
                            The data arrives in your system, ready for them to use
                            </h5>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="settings" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                Your customer gains faster access to value
                                </div>
                            </div>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="git-branch" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                You don't get help requests for data issues
                                </div>
                            </div>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="command" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                Stay competitive with automation
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default VideoFeature;
