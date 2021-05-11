import React, { Component } from 'react';
import {
    Navbar,
    Button
} from 'reactstrap';
import axios from 'axios';

class NavBarli extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.userId,
        }
        this.handleLogout = this.handleLogout.bind(this)
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
                <Navbar className="nav" color="dark" dark expand="md">
                    <Button
                        onClick={(evt) => this.props.setPage("HomePage")}>
                        Online Clinic Manager System
                </Button>
                    <Button color="danger"
                        className="ml-auto mr-2"
                        onClick={this.handleLogout}>
                        Sign Out
                </Button>
                </Navbar>
            </div>
        )
    }
}
export default NavBarli;