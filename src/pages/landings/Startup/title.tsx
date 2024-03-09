import { Badge, Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

const Title = () => {
    return (
        <section className="py-lg-6 py-4 mt-xl-1 mt-0 coworking-1">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <div className="text-center">
                            <h1 className="display-5 fw-medium">Let customers import external data formats in minutes</h1>
                            <p className="text-muted mx-auto w-75 mt-1">
                               Plus, give them the power to solve any data issues without leaving the upload page.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Title;
