import React, {Component} from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class ContactForm extends Component {
    state = {
        name: '',
        organization: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    clearForm = () => {
        document.getElementById('contact-form').reset();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.state.name;
        const organization = this.state.organization;
        const phone = this.state.phone;
        const email = this.state.email;
        const subject = this.state.subject;
        const message = this.state.message;
        axios({
            method: 'POST',
            url:"http://localhost:5000/send",
            data: {
                name,
                organization,
                phone,
                email,
                subject,
                message
            }
        }).then((response)=> {
            if(response.data.msg === 'success') {
                // DESIGN USER FEEDBACK BEFORE CLEARING FORM
                alert('Email sent!');
                this.clearForm();
            }
            else if(response.data.msg === 'fail'){
                alert("Message failed to send");
            }
        })

    }
    render() {
        return (
            <Form id="contact-form" className="m-2" onSubmit={this.handleSubmit}>
                <Form.Row className="m-2">
                    <Col>
                        <Form.Control id="name" type="text" placeholder="Nombre" onChange={this.handleChange}></Form.Control>
                    </Col>
                    <Col>
                        <Form.Control id="organization" type="text" placeholder="Empresa u organización" onChange={this.handleChange}></Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row className="m-2">
                    <Col>
                        <Form.Control id="phone" type="text" placeholder="Teléfono" onChange={this.handleChange}></Form.Control>
                    </Col>
                    <Col>
                        <Form.Control id="email" type="email" placeholder="Correo" onChange={this.handleChange}></Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row className="m-2">
                    <Col>
                        <Form.Control id="subject" className="mx-auto my-2" type="text" placeholder="Asunto" onChange={this.handleChange}></Form.Control>
                        <Form.Control id="message" as="textarea" rows="5" placeholder="¿Cómo te podemos ayudar?" onChange={this.handleChange}></Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row className="justify-content-center">
                    <Button type="submit" variant="warning" className="text-light">Enviar</Button>
                </Form.Row>
            </Form>

        )
    }
}

export default ContactForm