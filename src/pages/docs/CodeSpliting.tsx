import { Alert, Card, Col, Row } from 'react-bootstrap';

// component
import DocsLayout from './layout';

const CodeSpliting = () => {
    return (
        <DocsLayout>
            <Col xl={10} lg={9}>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title as="h4">Embed Importer</Card.Title>
                                <p>
                                   Simply, navigate to the home page, and find the importer you created.
                                </p>
                                <p>
                                    Click "Show Code"
                                </p>
                                <p>
                                    Copy the iframe, and paste it into your website.
                                </p>                                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </DocsLayout>
    );
};

export default CodeSpliting;
