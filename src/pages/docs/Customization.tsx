import { Card, Col, Row } from 'react-bootstrap';

// component
import DocsLayout from './layout';

const Customization = () => {
    return (
        <DocsLayout>
            <Col xl={10} lg={9}>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <h4 className="my-0">Testing Your Importer</h4>

                                <p className="mt-2">
                                    It's important to check that everything is working smoothly.
                                </p>

                                <p className="mt-2">
                                    An easy way to test is to use some sample original customer data. Data in a typical format that you would accept, before they or you have done changes to make it fit your system.
                                </p>

                                <h5 className="mt-4">Locate the importer</h5>

                                <p>
                                    Navigate to the home page, and find the importer you created.
                                </p>

                                <p>
                                    Click "Show Code"
                                </p>

                                <h5 className="mt-4">Open the importer</h5>

                                <p>
                                   A black box pops up with some code. Find the src url. It will something like this:
                                </p>

                                <p>src="https://domain.com/flow?xyz"</p>

                                <p>Copy the url after the src= and paste it into a browser tab.</p>

                                <p>Now you can go through the steps and use the importer as if you were a customer.</p>
                            
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </DocsLayout>
    );
};

export default Customization;
