import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// component
import Gallery from './Gallery';
import asset from '../../../../assets/images/compare/orders.jpeg';

// types
import { WorkImages } from '../types';

type ContentProps = {
    workImages: WorkImages[];
};

const Content = ({ workImages }: ContentProps) => {
    return (
        <section className="position-relative">
            <Container>
                <Row>
                    <Col lg={12}>
                        <figure className="figure">
                            <img
                                src={asset}
                                alt="contentImage"
                                className="figure-img img-fluid rounded"
                            />

                            <figcaption className="figure-caption text-center">
                                These two formats were migrated instantly with Elegan
                            </figcaption>
                        </figure>
                    </Col>
                </Row>

                {/* description */}
                <Row className="mt-5" data-aos="fade-up" data-aos-duration="300">
                    <Col lg={6}>
                        <div className="pe-4">
                            <h3>About Migration</h3>
                            <p>
                               Our model impressed us with this one. Not only was it able to identify that "Annual Dep" was a depreciation metric, but it also undertood that the output file of current value, required the calculation wth depreciation rate, date, current price and purchase date.
                            </p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="ps-4">
                            <h3>Project Description</h3>
                            <p>
                                Elegan was useful in migrating the data from the old asset management system to the new one. It was able to identify the data and migrate it to the new system without any issues.
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* image */}
                <Row className="mt-5">
                    <Col lg={12}>
                        <Gallery />
                    </Col>
                </Row>

                {/* work description */}
                <Row className="mt-5" data-aos="fade-up" data-aos-duration="300">
                    <Col lg={12}>
                        <p>
                            This was an example migration that we used to test the capabilities of Elegan. It was able to identify the data and migrate it to the desired schema automatically. Although, it is important to note that this does not aways happen. If your customer does get a data error, they have the ability in the flow to fix it without ever leaving your platform. 
                        </p>

                        <Row className="mt-5">
                            {(workImages || []).map((workImage, index) => {
                                return (
                                    <Col lg={4} key={index.toString()}>
                                        <div className="d-flex align-items-center mb-2 mb-xl-0">
                                            <span className="bg-soft-primary avatar avatar-sm rounded icon icon-with-bg icon-sm text-primary me-4 flex-shrink-0">
                                                <FeatherIcon icon={workImage.icon} className="icon-dual-primary" />
                                            </span>
                                            <div className="flex-grow-1">
                                                <h5 className="my-0">{workImage.title}</h5>
                                            </div>
                                        </div>
                                    </Col>
                                );
                            })}
                        </Row>

                        <p className="mt-5">
                            Interested in how you can use Elegan to migrate your data? <a href="https://calendly.com/elegan/discover" target="_blank" rel="noreferrer" className="text-primary">Learn more</a>
                        </p>
{/* 
                        <h5 className="mt-5 mb-20">Technologies Used</h5>
                        <p className="mb-2">
                            <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            Sketch & Illustrator
                        </p>
                        <p className="mb-2">
                            <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            Raact JS
                        </p>
                        <p className="mb-2">
                            <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            Django - A Web Framework in Python
                        </p>
                        <p className="mb-2">
                            <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            PostgreSQL - Relational Database System
                        </p> */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Content;
