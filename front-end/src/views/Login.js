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
import '../CSS/mycssfile.css';
import { connect } from '../models/useAuth';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
        this.canBeSubmitted = this.canBeSubmitted.bind(this)
    }

    canBeSubmitted() {
        const { username, password } = this.state;
        return (
            username.length > 0
            && password.length > 0
        )
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        if (this.canBeSubmitted()) {
            // axios.post('http://localhost:8080/PC3R_Project/Login', 
            // require('querystring').stringify(this.state))
            // .then(
            //     (resp) => {
            //         if(resp.data.status==="ok"){
            //             alert(resp.data.message)
            //             this.props.setLoginInfo({
            //                 userId:resp.data.userId,
            //                 sessionKey:resp.data.sessionKey,
            //                 username:resp.data.username,
            //                 isLoggedIn:true,page:"mainpage"})
            //         }else{
            //             alert(resp.data.message)
            //         }
            //     },(err) => {
            //         alert(err)
            //     }
            // );
            connect(
                this.state.username,
                this.state.password
            )
        }
    }

    render() {
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
                                        placeholder="Please type your username"
                                        value={this.state.username}
                                        onChange={(evt) => { this.setState({ username: evt.target.value }) }} />
                                </InputGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Password</Label>
                            <Col sm={10}>
                                <Input type="password" name="password"
                                    placeholder="Please type your password"
                                    value={this.state.password}
                                    onChange={(evt) => { this.setState({ password: evt.target.value }) }} />
                            </Col>
                        </FormGroup>
                    </Form>
                    <ButtonToggle className="loginBtn" type="submit"
                        style={{ float: 'right' }}
                        onClick={this.handleSubmit} >Login</ButtonToggle>
                </div>
            </Container>
        )
    }
}
export default Login;