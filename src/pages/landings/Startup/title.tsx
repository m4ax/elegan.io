import { Badge, Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

const Title = () => {
    return (
        <section className="py-lg-6 py-4 mt-xl-1 mt-0 coworking-1">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <div className="text-center">
                            <h1 className="display-5 fw-medium">Your new customer journey</h1>
                            <p className="text-muted mx-auto w-75 mt-1">
                               Simplified with Elegan.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Title;
