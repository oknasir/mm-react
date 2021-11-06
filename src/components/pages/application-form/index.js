import NavigationBar from "../../navs/NavigationBar"
import {useEffect, useState} from "react";
import {Button, Card, Container} from "react-bootstrap";
import {faMobileAlt, faQuestion} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {GeneralQuestions} from "./stepper/step1";
import {PersonalDetails} from "./stepper/step2";
import {ThePolicy} from "./stepper/step3";
import {FormSummary} from "./stepper/step4";

const stepper = [
    {title: 'General Questions', icon: <FontAwesomeIcon icon={faQuestion}/>, component: <GeneralQuestions/>},
    {title: 'Personal Details', icon: <FontAwesomeIcon icon={faQuestion}/>, component: <PersonalDetails/>},
    {title: 'The Policy', icon: <FontAwesomeIcon icon={faQuestion}/>, component: <ThePolicy/>},
    {title: 'Form Summary', icon: <FontAwesomeIcon icon={faQuestion}/>, component: <FormSummary/>},
]

function ApplicationForm() {
    const [step, setStep] = useState(0)

    useEffect(() => {
        document.title = 'Application Form | Nasir Mehmood\'s Resume'
    }, [])

    return (
        <>
            <NavigationBar/>

            <Container>
                <Card>
                    <Card.Header className="py-4 d-flex justify-content-around">
                        {stepper.map((item, index) => (
                            <div className={`stepper-menu-item ${step === index ? 'active' : ''}`}><span className="stepper-icon">{item.icon}</span> <span className="fs-5">{item.title}</span></div>
                        ))}
                    </Card.Header>
                    <Card.Body>
                        {stepper[step]?.component}
                    </Card.Body>
                    <Card.Footer className="py-3 d-flex justify-content-between">
                        <Button onClick={() => setStep(step <= 0 ? 0 : (step - 1))} disabled={step === 0} variant="primary">Previous</Button>

                        <div>
                            <Button onClick={() => setStep(step >= 3 ? 3 : (step + 1))} variant="secondary" className="me-3">Skip</Button>
                            <Button onClick={() => setStep(step >= 3 ? 3 : (step + 1))} variant="success">{step === 3 ? 'Finish' : 'Next'}</Button>
                        </div>
                    </Card.Footer>
                </Card>
            </Container>
        </>
    );
}

export default ApplicationForm;
