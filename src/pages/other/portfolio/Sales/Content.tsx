import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// component
import Gallery from './Gallery';
import sales from '../../../../assets/images/compare/sales-data.jpg';

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
                                src={sales}
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
                            In this updated sales data migration scenario, Elegan demonstrates its ability to seamlessly integrate and transform data from multiple sources into a unified, more informative format. The system processes information from two input files - one containing detailed order information and another with sales representative data - to produce a comprehensive output that enhances data usability and insights.
                            
                            </p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="ps-4">
                            <h3>Project Description</h3>
                            <p>
                            In this migration, Elegan showcases its versatility by performing a range of crucial data transformations. The system adeptly handles date reformatting, seamlessly converting from YYYY-MM-DD to DD/MM/YYYY format. It excels in data consolidation, merging information from multiple input files and connecting sales representative IDs with their full names. Elegan also streamlines address information by combining separate components into a single, coherent field. The system demonstrates its analytical capabilities by inferring regional data, likely based on shipping postcodes.
                            
                            </p>
                            <p> Furthermore, it enhances financial data presentation by adding the pound sterling symbol to monetary values. Throughout the process, Elegan maintains data integrity through intelligent field mapping, accurately translating between input and output fields despite slight naming variations.
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
                        <p>This migration showcases Elegan's ability to handle complex data structures, perform intelligent data transformations, and merge information from multiple sources. The resulting output provides a more complete view of each sales transaction, including detailed order information, customer data, product details, shipping information, and associated sales representative. This consolidated and enhanced data set enables more effective sales analysis, improved customer insights, and streamlined reporting capabilities for the company.</p>
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
