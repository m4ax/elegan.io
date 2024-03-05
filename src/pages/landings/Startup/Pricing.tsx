import { Badge, Col, Container, Row, Table } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// types
import { PlanFeature } from './types';

type PricingProps = {
    planFeatures: PlanFeature[];
};

const Pricing = ({ planFeatures }: PricingProps) => {
    return (
        <section className="my-5 py-5 position-relative">
            <Container data-aos="fade-up" data-aos-duration="1500">
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                            Pricing
                        </Badge>
                        <h1 className="display-5 fw-medium">Access Agreements</h1>
                        <p className="text-muted mx-auto">
                            Simple pricing that <span className="text-primary fw-bold">works</span> for everyone.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5 align-items-center justify-content-center">
                    <Col lg={12}>
                        <div className="table-responsive-lg w-lg-75 mx-lg-auto">
                            <Table>
                                <thead className="text-center">
                                    <tr className="border-top">
                                        <th className="w-50"></th>
                                        <th>
                                            <span className="text-dark">Starter</span>
                                            <small className="d-block text-body fw-normal">£0/yr</small>
                                        </th>
                                        <th className="border-start border-end">
                                            <span className="text-dark">Business</span>
                                            {/* <Badge bg="orange" pill className="ms-1">
                                                Popular
                                            </Badge> */}
                                            <small className="d-block text-body fw-normal">£5,000/yr</small>
                                        </th>
                                        <th>
                                            <span className="text-dark">Enterprise</span>
                                            <small className="d-block text-body fw-normal">£25,000/yr</small>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(planFeatures || []).map((planFeature, index) => {
                                        return (
                                            <tr className="border-top" key={index.toString()}>
                                                <td>{planFeature.name}</td>
<td className="text-center">
    {planFeature.starter.available ? (
        <span className="icon icon-xs text-success">
            <FeatherIcon icon="check" />
        </span>
    ) : planFeature.starter.addon ? (
        planFeature.starter.price ? (
            <Badge bg="info" pill>
                {planFeature.starter.price}
            </Badge>
        ) : (
            <p className="input-data">120k</p>
        )
    ) : null}
</td>


<td className="text-center border-start border-end">
    {planFeature.professional.available ? (
        <span className="icon icon-xs text-success">
            <FeatherIcon icon="check" />
        </span>
    ) : planFeature.professional.addon ? (
        planFeature.professional.price ? (
            <Badge bg="info" pill>
                {planFeature.professional.price}
            </Badge>
        ) : (
            <Badge bg="dark" pill>
                Add-on Available
            </Badge>
        )
    ) : null}
</td>


<td className="text-center">
    {planFeature.enterprise.available ? (
        <span className="icon icon-xs text-success">
            <FeatherIcon icon="check" />
        </span>
    ) : planFeature.enterprise.addon ? (
        planFeature.enterprise.price ? (
            <Badge bg="info" pill>
                {planFeature.enterprise.price}
            </Badge>
        ) : (
            <p className="input-data">
                Add-on
            </p>
        )
    ) : null}
</td>

                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Pricing;
