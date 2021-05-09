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


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
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
            // connect(
            //     this.state.username,
            //     this.state.password
            // )
            axios({
                method: 'post',
                url: `${'http://localhost:5000/api/values/login'}`,
                data: {
                    username: this.state.username,
                    password: this.state.password
                }
                ,
            })
                .then(
                    (resp) => {
                        if (resp.data.status == "Success") {
                            this.props.setLoginInfo({
                                userId: resp.data.data._id,
                                username: resp.data.data.username,
                                isLoggedIn: true ,
                                page: "mainpage"
                            })
                            console.log(resp.data.data._id)
                            console.log("isLog")
                            //console.log(this.props.isLoggedIn)
                        } else {
                            console.log(resp.data)
                        }
                        // if (resp.data.message == "Connection right") {
                        //     setLoginInfo({
                        //         userId:resp.data.userId,
                        //         username:resp.data.username,
                        //         isLoggedIn:true,
                        //         page:"mainpage"})
                        //         console.log("val")
                        //         console.log(resp.data.data)

                        // }else{
                        //     console.log("false")
                        // }
                        alert(resp.data.message)

                    }
                    , (err) => {
                        console.log("err")
                        alert(err)
                    }
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