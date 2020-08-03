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
        validated: false,
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
        e.preventDefault()
        const form = e.currentTarget;
        if(form.checkValidity() === false){
            e.preventDefault();
            e.stopPropagation();
            document.querySelector("#responseMessage").style.display = 'none';
            this.setState({
                validated: true
            })
        }else{
            const appName = 'Securitas';
            const name = this.state.name;
            const organization = this.state.organization;
            const phone = this.state.phone;
            const email = this.state.email;
            const subject = this.state.subject;
            const message = this.state.message;
            axios({
                method: 'POST',
                url:"https://securitas-mailer.herokuapp.com/send",
                data: {
                    appName,
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
                    document.querySelector("#responseMessage").style.display = 'block';
                    this.setState({
                        validated: false
                    })
                    this.clearForm();
                }
                else if(response.data.msg === 'fail'){
                    alert("Error al enviar mensaje");
                }
            })
        }
    }
    render() {
        return (
            <Form id="contact-form" className="m-2" onSubmit={this.handleSubmit} noValidate validated={this.state.validated}>
                <Form.Row className="m-2">
                    <Col>
                        <Form.Control id="name" type="text" placeholder="Nombre" onChange={this.handleChange} required></Form.Control>
                    </Col>
                    <Col>
                        <Form.Control id="organization" type="text" placeholder="Empresa u organización" onChange={this.handleChange} required></Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row className="m-2">
                    <Col>
                        <Form.Control id="phone" type="text" placeholder="Teléfono" onChange={this.handleChange} required></Form.Control>
                    </Col>
                    <Col>
                        <Form.Control id="email" type="email" placeholder="Correo" onChange={this.handleChange} required></Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row className="m-2">
                    <Col>
                        <Form.Control id="subject" className="mx-auto my-2" type="text" placeholder="Asunto" onChange={this.handleChange} required></Form.Control>
                        <Form.Control id="message" as="textarea" rows="5" placeholder="¿Cómo te podemos ayudar?" onChange={this.handleChange} required></Form.Control>
                        <Form.Control.Feedback type="invalid">Debes llenar todos los campos</Form.Control.Feedback>
                        <div id="responseMessage" style={{display: 'none'}} className="text-success">¡Tu mensaje se envió exitosamente!</div>
                    </Col>
                </Form.Row>
                <Form.Row>
                </Form.Row>
                <Form.Row className="justify-content-center">
                    <Button type="submit" className="text-light">Enviar</Button>
                </Form.Row>
            </Form>

        )
    }
}

export default ContactForm