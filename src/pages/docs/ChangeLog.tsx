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

                     

                                <h5 className="mt-4">v1.0.0 - 9 Mar 2024</h5>

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
