import { Alert, Card, Col, Row } from 'react-bootstrap';

// component
import DocsLayout from './layout';

const Routing = () => {
    return (
        <DocsLayout>
            <Col xl={10} lg={9}>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title as="h4">Linking Database</Card.Title>
                                <p>Currently, this is done manually. Please contact us.</p>
                                <p>If you want to test the product, the output files will be saved under the "Files" tab on the dashboard </p>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </DocsLayout>
    );
};

export default Routing;
