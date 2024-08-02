import { Card, Col, Row } from 'react-bootstrap';

// component
import DocsLayout from './layout';

const ChangeLog = () => {
    return (
        <DocsLayout>
            <Col xl={10} lg={9}>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <h4 className="my-0">Change Log</h4>
                                
                                <h5 className="mt-4">v3.0.4 - 02 August 2024</h5>

                                <ul className="mt-3">
                                    <li>Simplified and more intelligent error handling</li>
                                    <li>Old and new for columns affected by user in text to transformation</li>
                                    <li>Bug fixes</li>
                                </ul>

                                <h5 className="mt-4">v3.0.3 - 14 July 2024</h5>

                                <ul className="mt-3">
                                    <li>Connecting node rules and validations</li>
                                    <li>Update model used</li>
                                    <li>Animations</li>
                                </ul>

                                <h5 className="mt-4">v3.0.2 - 1 July 2024</h5>

                                <ul className="mt-3">
                                    <li>Header error handling</li>
                                    <li>Text to transformation</li>
                                    <li>Animations</li>
                                </ul>

                                <h5 className="mt-4">v3.0.1 - 28 May 2024</h5>

                                <ul className="mt-3">
                                    <li>Automatic header mapping</li>
                                    <li>Header validations</li>
                                    <li>Significant improved AI transformation accuracy </li>
                                </ul>

                                <h5 className="mt-4">v3.0.0 - 29 April 2024</h5>

                                <ul className="mt-3">
                                    <li>Full architecture refactor</li>
                                </ul>

                                <h5 className="mt-4">v2.0.3 - 01 Feb 2024</h5>

                                <ul className="mt-3">
                                    <li>Multiple origin destinations</li>
                                    <li>Embed with domain check</li>
                                    <li>Bug fixes</li>
                                </ul>


                                <h5 className="mt-4">v2.0.2 - 15 Dec 2023</h5>

                                <ul className="mt-3">
                                    <li>Table comparisons</li>
                                    <li>New line error handling</li>
                                    <li>New importer flow</li>
                                    <li>Bug fixes</li>
                                    
                                </ul>

                                <h5 className="mt-4">v2.0.0 - 24 November 2023</h5>
                                <ul className="mt-3">
                                    <li>Full architecture refactor</li>
                                </ul>

                                <h5 className="mt-4">v1.0.1 - 03 November 2023</h5>

                                <ul className="mt-3">
                                    <li>Worker for multiple files</li>
                                    <li>Transformation functions</li>
                                    <li>Validations</li>
                                    <li>Many bug fixes</li>

                                </ul>

                                <h5 className="mt-4">v1.0.0 - 10 October 2023</h5>
                                <ul className="mt-3">
                                    <li>Initial Release</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </DocsLayout>
    );
};

export default ChangeLog;
