import React, {Component} from 'react';
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
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let form = document.getElementById('contact-form');
        form.reset();
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