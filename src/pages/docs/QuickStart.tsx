import { Card, Col, Row } from 'react-bootstrap';

// component
import DocsLayout from './layout';

const QuickStart = () => {
    return (
        <DocsLayout>
            <Col xl={10} lg={9}>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <h4 className="mt-0">Create your first importer</h4>

                                <p>
                                    Login to the dashboard and click create a new importer{' '}.
                                </p>
                                <h5 className="mt-4" id="prerequisites">
                                    Upload template
                                </h5>
                                <p>
                                    You will be required to upload a schema file. This is a csv file in the format that you want customer data to be converted to.
                                </p>
                                <p>
                                    It is important that the schema file has data in it.
                                </p>

                                <h5 className="mt-4" id="prerequisites">
                                    Set rules
                                </h5>

                                <p>Select the fields that are required and the ones that are unique. </p>

                                <p>If you mark a field as required, your customers will not be able to complete the upload process without providing data for it.</p>

                                <h5 className="mt-4" id="prerequisites">
                                    Save your importer with a friendly name
                                </h5>

                                <p>This is so you can refer to it later. Maybe the page name it will reside on, or the type of data it is accepting.</p>


                                <h5 className="mt-4" id="prerequisites">
                                    Add your website domain
                                </h5>

                                <p>To prevent abuse, we will only accept csv files for your importer that are coming from your website. </p>

                                <p>You can add multiple websites to your whitelist. Just adding the domain name is fine. You don't need to specify the page link too.</p>

                                <h5 className="mt-4" id="prerequisites">
                                    Done!
                                </h5>


                                <p>Generate your API key, save it for later, and click finish.</p>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </DocsLayout>
    );
};

export default QuickStart;
