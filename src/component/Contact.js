import {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg'

export default function Contact(){
    const initialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    const [formDetails, setFormDetails] = useState(initialDetails)
    const [buttonText, setButtonText] = useState('send')
    const [status, setStatus] = useState({})

    function onFormUpdate(category , value){
        setFormDetails((prevState)=>({...prevState, [category]:value}))
    }

    return(
        <section className='contact' id='contact'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt='contact img'/>
                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.firstName} placeholder='firstname' onChange={(e)=>onFormUpdate("firstName", e.target.value)}/>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.lastName} placeholder='last name' onChange={(e)=>onFormUpdate("lastName", e.target.value)}/>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' value={formDetails.email} placeholder='email' onChange={(e)=>onFormUpdate("email", e.target.value)}/>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='tel' value={formDetails.phone} placeholder='phone number' onChange={(e)=>onFormUpdate("phone", e.target.value)}/>
                                </Col>

                                <Col>
                                    <textarea row='6' value={formDetails.message} placeholder='message' onChange={(e)=>onFormUpdate("message", e.target.value)} />
                                    <button type='submit'> <span>{buttonText}</span> </button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                       <p className={status.success===false ? "danger" : "success"}> {status.message} </p>
                                    </Col>
                                    }

                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
