import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    ButtonToggle,
    InputGroupAddon,
    InputGroup,
    InputGroupText
  } from 'reactstrap';
import axios from 'axios';
import './mycssfile.css';

class MainPage extends Component{

     render(){
        return (
            <Container className="loginform"  >
            <div className="loginContainer" class="shadow p-3 mb-5 bg-white rounded">
                <Form>
                <FormGroup row>
                    <Label sm={2}>Username</Label>
                    <Col sm={10}>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                        </InputGroupAddon>
                        <Input type="text" name="username"  
                        placeholder="Please type your username"/>
                    </InputGroup>                            
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Password</Label>
                    <Col sm={10}>
                    <Input type="password" name="password" 
                            placeholder="Please type your password"/>
                    </Col>
                </FormGroup>
            </Form>
            <ButtonToggle className="loginBtn" type="submit" 
                style={{float : 'right'}} >Login</ButtonToggle>
            </div>
        </Container>
        )
    }
}
export default MainPage;