import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { postBook } from '../redux/actions/book';

class BookAdd extends Component{
    state = {
        name: "",
        writer: "",
        description: "",
        publisher: "",
        stock: ""
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(postBook(this.state));
        this.props.onHandleClose();
    }
    render(){
        console.log(this.props);
        return(
            <Modal show={this.props.show} onHide={this.props.onHandleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Books</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name" onChange={this.onChangeValue} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Writer</Form.Label>
                            <Form.Control type="text" placeholder="Enter Writer" name="writer" onChange={this.onChangeValue} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter Description" name="description" onChange={this.onChangeValue} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Publisher</Form.Label>
                            <Form.Control type="text" placeholder="Enter Publisher" name="publisher" onChange={this.onChangeValue} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="text" placeholder="Enter Description" name="stock" onChange={this.onChangeValue} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}

export default connect()(BookAdd);