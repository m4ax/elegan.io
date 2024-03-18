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
                            For the project at hand, our AI remarkably identified and aligned customer order data from various sales platforms, such as Etsy, to the preferred format for the poster company's system. This includes precise mapping of fields such as 'ORDER ID' to 'EXTERNAL ID', ensuring accuracy in the reflection of item descriptions and managing date formats. Particularly commendable was the AI’s handling of addresses and contact information, streamlining it into a uniform structure which will significantly ease the order fulfilment process.
                            </p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="ps-4">
                            <h3>Project Description</h3>
                            <p>
                            Elegan played a crucial role in the transition of customer sales data into the company’s own schema for a poster company. The AI’s intuitive understanding of different data elements allowed for seamless integration of external sales information into the internal order management system. The result was an efficient, reliable data migration that required minimal manual intervention, setting a high standard for future onboarding of sales data.
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
                        <p>
                        The adoption of our software permitted the poster company's users to efficiently migrate their sales data via a straightforward drag-and-drop interface. This negated the necessity for bespoke coding for distinct marketplace integrations or the manual restructuring of data within spreadsheet applications. Consequently, the software's capability to intuitively align different data structures to the company's requirements has significantly reduced the time and resources typically expended on data preparation, enabling everyone to focus more on their core business operations.
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
