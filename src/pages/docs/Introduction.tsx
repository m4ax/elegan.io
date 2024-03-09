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
                            info
                                </p>

                                <p className="mb-1">Additional features :</p>
                                <ul>
                                    <li>
                                        chicken nuggs
                                    </li>
                                </ul>

                                <p>
                                    This documentation guide is for all users who can even be beginners or experienced
                                     developers.
                                </p>
             
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title as="h4">File Structure</Card.Title>
                                <p>
                                   info
                                </p>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </DocsLayout>
    );
};

export default Introduction;
