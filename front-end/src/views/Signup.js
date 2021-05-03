import React, { Component } from 'react';
import {
    Form, FormGroup,
    Label, Input, Col,
    ButtonToggle, Container,
    InputGroupAddon,
    InputGroup,
    InputGroupText
} from 'reactstrap';
import axios from 'axios';
import '../CSS/mycssfile.css';
import { register } from '../models/useAuth';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            firstname: "",
            lastname: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.canBeSubmitted = this.canBeSubmitted.bind(this)
    }

    canBeSubmitted() {
        return (
            this.state.username.length > 0
            && this.state.password.length > 0
            && this.state.firstname.length > 0
            && this.state.lastname.length > 0
        )
    }



    // handleSubmit = (evt) => {
    //     evt.preventDefault()
    //     if(this.canBeSubmitted()){
    //         axios.post('http://localhost:5000/back_end/Program/Btnreg_Click',require('querystring').stringify(this.state)).then(
    //             alert("okey")
    //             // (resp) => {
    //             //     if(resp.data.status==="ok"){
    //             //         alert(resp.data.message)
    //             //         this.props.setPage("homepage")
    //             //     }else{
    //             //         alert(resp.data.message)
    //             //     }
    //             // },(err) => {
    //             //     alert(err)
    //             // }
    //         );
    //     }
    // }
    handleSubmit = (evt) => {
        evt.preventDefault()
        if (this.canBeSubmitted()) {

            register(
                this.state.firstname,
                this.state.lastname,
                this.state.username,
                this.state.password)
        }
    }


    render() {
        return (
            <Container className="signupform">
                <div className="signupContainer" class="shadow p-3 mb-5 bg-white rounded">
                    <Form>
                        <FormGroup row>
                            <Label sm={3}>First name</Label>
                            <Col sm={9}>
                                <Input type="text" name="firstname"
                                    placeholder="Please type your first name"
                                    value={this.state.firstname}
                                    onChange={(evt) => { this.setState({ firstname: evt.target.value }) }} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={3}>Last name</Label>
                            <Col sm={9}>
                                <Input type="text" name="lastname"
                                    placeholder="Please type your last name"
                                    value={this.state.lastname}
                                    onChange={(evt) => { this.setState({ lastname: evt.target.value }) }} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={3}>Username</Label>
                            <Col sm={9}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>@</InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="text" name="username"
                                        placeholder="Please choose a username"
                                        value={this.state.username}
                                        onChange={(evt) => { this.setState({ username: evt.target.value }) }} />
                                </InputGroup>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={3}>Password</Label>
                            <Col sm={9}>
                                <Input type="password" name="password"
                                    placeholder="Please type your password"
                                    value={this.state.password}
                                    onChange={(evt) => { this.setState({ password: evt.target.value }) }} />
                            </Col>
                        </FormGroup>
                    </Form>
                    <ButtonToggle className="signupBtn" type="submit"
                        style={{ float: 'right' }}
                        onClick={this.handleSubmit} >Signup</ButtonToggle>
                </div>
            </Container>
        )
    }
}
export default Signup;

