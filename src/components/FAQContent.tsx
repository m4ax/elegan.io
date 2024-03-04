import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContext, Card, useAccordionButton } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';
import { networkInterfaces } from 'os';

type CustomToggleProps = {
    children: React.ReactNode;
    eventKey: string;
    containerClass: string;
    linkClass: string;
    callback?: (eventKey: string) => void;
};

const CustomToggle = ({ children, eventKey, containerClass, linkClass, callback }: CustomToggleProps) => {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <Link
            to="#"
            className={classNames(linkClass, {
                collapsed: !isCurrentEventKey,
            })}
            onClick={decoratedOnClick}
        >
            <Card.Header>
                <h5 className={containerClass}>
                    {children} <FeatherIcon icon="chevron-down" className="icon-xs accordion-arrow" />
                </h5>
            </Card.Header>
        </Link>
    );
};

const FAQContent = () => {
    const faqs = [
        {
            question: 'I want to see how it works.',
            ans: "Book a call. We'll show you.",
        },
        {
            question: 'How long is set up?',
            ans: "Typically a few days.",
        },
        {
            question: 'What if my data is confidential?',
            ans: "You can host our services yourself. We will never touch your data.",
        },
        {
            question: "Why can't I build this internally?",
            ans: "You can. But, if you want excellence and you wan't it now - you can't.",
        },
    ];

    return (
        <div id="faqContent">
            <Accordion defaultActiveKey="0" className="custom-accordionwitharrow" id="accordionExample">
                {(faqs || []).map((item, index) => {
                    return (
                        <Card className="mb-2 border rounded-sm" key={index.toString()}>
                            <CustomToggle
                                eventKey={String(index)}
                                containerClass="my-1 fw-medium"
                                linkClass="text-dark"
                            >
                                {item.question}
                            </CustomToggle>
                            <Accordion.Collapse eventKey={String(index)}>
                                <Card.Body className="text-muted pt-1">{item.ans}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    );
                })}
            </Accordion>
        </div>
    );
};

export default FAQContent;
