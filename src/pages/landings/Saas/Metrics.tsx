import classNames from 'classnames';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// types
import { Feature3 } from './types';

type FeatureProps = {
    features: Feature3[];
};

const Metrics = ({ features }: FeatureProps) => {
    return (
        <section className="py-5 position-relative">
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <Badge pill className="badge-soft-primary px-2 py-1" bg="">
                            Metrics
                        </Badge>
                        <h1 className="display-5 fw-semibold">Are you a good fit?</h1>
                        <p className="text-muted mx-auto">
                            Solid questions to understand  <span className="text-primary fw-bold"> potential</span>  problems.
                        </p>
                    </Col>
                </Row>
                <Row className="pt-5">
                    {(features || []).map((feature, index) => {
                        return (
                            <Col md={4} data-aos="fade-up" data-aos-duration="300" key={index.toString()}>
                                {/* <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary"> */}
                                <span
                                    className={classNames(
                                        'bg-soft-' + feature.variant,
                                        'text-' + feature.variant,
                                        'avatar',
                                        'avatar-sm',
                                        'rounded-lg',
                                        'icon',
                                        'icon-with-bg',
                                        'icon-xs'
                                    )}
                                >
                                    <FeatherIcon
                                        icon={feature.icon}
                                        className={classNames('icon-dual-' + feature.variant)}
                                    />
                                </span>
                                <h4 className="mt-3 mb-2 fw-semibold">{feature.title}</h4>
                                <p className="mb-4 pb-3 text-muted">{feature.description}</p>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Metrics;
