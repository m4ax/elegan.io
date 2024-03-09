import { Card, Col, Row } from 'react-bootstrap';
import classNames from 'classnames';

// types
import { Variant } from '../types';

type ColorsProps = {
    variants: Variant[];
};

const Colors = ({ variants }: ColorsProps) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title as="h4" className="my-0">
                    Information
                </Card.Title>
                <Card.Text className="sub-header">
                    Info
                </Card.Text>
            
            </Card.Body>
        </Card>
    );
};

export default Colors;
