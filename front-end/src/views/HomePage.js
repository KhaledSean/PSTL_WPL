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
import Patient from './Patient'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: props.userId,
            username: props.username
        }
        // this.click = this.click.bind(this)
    }

    handleLogout(evt) {
        evt.preventDefault()
        // this.props.setLoginInfo({ userId: "#", isLoggedIn: false, page: "mainpage" })
        this.props.setLoginInfo({
            userId: "#",
            page: "mainpage"
        })
        console.log("********")
    }

    render() {
        return (
            <div>
                <Container className="HomePageli"
                    hover style={{
                        background: "rgba(255,255,255, .75)",
                    }}>
                    <div>
                        <Button color="warning"
                            onClick={(evt) => this.props.setPage("Patient")}
                        > Patients </Button> {' '}
                        <Button color="info"
                            onClick={(evt) => this.props.setPage("Disease")}
                        > Disease symptoms </Button> {' '}
                        <Button color="info"
                            onClick={(evt) => this.props.setPage("Appointments")}
                        > Appointments </Button>
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