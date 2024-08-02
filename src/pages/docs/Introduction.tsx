import { Row, Col, Card } from 'react-bootstrap';

// components
import DocsLayout from './layout';

const createMarkup = (text: string) => {
    return { __html: text };
};

const Introduction = () => {
    return (
        <DocsLayout>
            <Col xl={10} lg={9}>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title as="h4">Introduction</Card.Title>
                                <p>
                                    Elegan is a prebuilt CSV data importer. Its job is to convert spreadsheets from one format to another.
                                </p>
                                <p>
                                    We use algorithms and artificial intelligence to identify your customers' formats and transform them to match yours.
                                    Automating this process simplifies your customers' journey, allowing them to start using your product right away.
                                </p>
                                   
                                <p>
                                    This documentation guide is for all users who can even be beginners or experienced
                                     developers. Although, for embedding and database linking, you will need to have some dev knowledge.
                                </p>
             
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title as="h4">How to get up and running</Card.Title>
                                <p className="mb-1">Steps to get our product up and running on your website:</p>
                                <ul>
                                    <li>
                                        Create an importer
                                    </li>
                                    <li>
                                        Upload your spreadsheet format
                                    </li>
                                    <li>
                                        Link your database
                                    </li>
                                    <li>
                                        Embed our importer on your website
                                    </li>
                                </ul>
                                <p className="mb-1">We'll walk you through each step of the process in this guide.</p>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </DocsLayout>
    );
};

export default Introduction;
