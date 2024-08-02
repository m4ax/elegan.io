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
                    Current Features
                </Card.Title>
                <Card.Text className="sub-header">
                    <ul>
                        <li>Support for million row files</li>
                        <li>Automatic column mapping</li>
                        <li>Customers can fix data in app</li>
                        <li>Text instructions for data format changes</li>
                        <li>Intelligient error handling</li>
                        <li>Embed importer on your website</li>
                    </ul>
                <h4>Scheduled releases</h4>
                <ul>
                    <li>24/7 instant for failed imports, for your customers</li>
                    <li>Custom validations</li>
                    <li>Automatic database linking</li>
                    <li>Multi file support</li>
                    <li>Advanced preliminary data cleaning</li>
                    <li>Success & failure statistics</li>
                </ul>
                </Card.Text>
            
            </Card.Body>
        </Card>
    );
};

export default Colors;
