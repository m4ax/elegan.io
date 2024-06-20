import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// component
import Gallery from './Gallery';
import hr from '../../../../assets/images/compare/hr-system.jpg';

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
                                src={hr}
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
                            Elegan's HR data migration solution demonstrated remarkable efficiency in transforming complex legacy data structures into a streamlined, user-friendly format. 
                            
                            The system expertly handled various data transformations, including name consolidation, age calculation, date standardization, and currency formatting. By intelligently parsing and mapping fields between input and output formats, Elegan ensured a smooth transition of critical employee information, even when confronted with differing field names and data types.
                            
                            </p>
                            
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="ps-4">
                            <h3>Project Description</h3>
                                 <p>This automated migration process addressed several critical issues faced by the HR software company. By eliminating the need for complex manual data transfers, Elegan significantly improved the first impression for new users, reducing onboarding friction and support requirements. 
                                    
                                 </p>
                                 <p>   The system's ability to instantly migrate data allowed the company to scale efficiently, freeing up valuable engineering resources that would otherwise be spent on developing custom data importers. Additionally, Elegan's automated handling of common data transformations eliminated repetitive manual fixes, increasing overall efficiency and reducing errors.</p>
                         
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

                    <p>
                        By leveraging Elegan's capabilities, the HR software company was able to provide a superior user experience, setting itself apart in a competitive market. The streamlined data migration process led to increased user satisfaction, higher retention rates, and a stronger market position. Ultimately, Elegan's solution empowered the company to focus on core product development and customer service, rather than grappling with data integration challenges, positioning them for sustainable growth and success in the HR software industry.
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
