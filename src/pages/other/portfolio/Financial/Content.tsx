import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// component
import Gallery from './Gallery';
import asset from '../../../../assets/images/compare/financial-data.jpg';

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
                                These three formats were migrated instantly with Elegan
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
                            In this scenario, Elegan was employed to migrate transaction data from two different customer formats into a standardized desired output format. Our systems ability to intelligently map and transform data from multiple sources with varying formats has greatly streamlined our customers data migration process when onboarding new clients. 
                            
                            </p>
                            <p>It has eliminated the need for manual intervention and reduced the time and resources required to integrate data from different systems. This has allowed the company, and it's customers, to focus on its core business operations while ensuring data accuracy and consistency across its systems.
                            </p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="ps-4">
                            <h3>Project Description</h3>
                            <p>
                            Elegan has intelligently parsed and mapped the fields from these two disparate formats into a unified schema in the desired combined output. We mapped TXN_ID from file 1 and REFERENCE from file 2 into a new field called EXTERNAL ID, which serves as the original identifier for each transaction. 
                            
                            </p>
                            <p>Additionally, our model has generated a new unique identifier called INTERNAL ID for each transaction in the combined format, in which a custom function was used.
Our system has also extracted the transaction dates from the DATE fields in both input files and standardized them into a consistent format in the TRANSACTION DATE field. It converted the transaction amounts into Pounds Sterling (£) based on the live exchange rate.
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* image
                <Row className="mt-5">
                    <Col lg={12}>
                        <Gallery />
                    </Col>
                </Row> */}

                {/* work description */}
                <Row className="mt-5" data-aos="fade-up" data-aos-duration="300">
                    <Col lg={12}>

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
