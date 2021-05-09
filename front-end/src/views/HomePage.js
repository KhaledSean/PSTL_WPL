import React, { Component } from 'react';
import {
    Row,
    Col,
    Table,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Form,
    FormGroup,
    Label,
    Input,
    ButtonToggle,
    Button,
    Container
} from 'reactstrap';
import axios from 'axios';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: props.userId,
            username: props.username
        }
    }


    render() {
        return (
            <div>
                <Container className="HomePageli"
                    hover style={{
                        background: "rgba(255,255,255, .75)",
                    }}>
                    <div>
                        <Button color="warning">Patients</Button> {' '}
                        <Button color="info">Disease symptoms</Button> {' '}
                        <Button color="info">appointments</Button>
                    </div>
                    <div>
                        <Button color="success">Calendar</Button> {' '}
                        <Button color="success">Reports</Button>
                    </div>

                </Container>
            </div>
        )
    }
}
export default HomePage;