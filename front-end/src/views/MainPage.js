import React, { Component } from 'react';
import axios from 'axios';
import Login from './Login';
import Signup from './Signup';
import NavBarlo from './NavBarlo';
import NavBarli from './NavBarli';
import HomePage from './HomePage';
import {
    NavbarBrand,
    Navbar,
    Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/mycssfile.css';
import Home from './Home';
import backgroundIMG from '../img/HomeIMG.jpeg'
import Patient from './Patient';
import Appointments from './Appointments';
import Disease from './Disease'


const styleli = {
    width: '100%',
    height: '660px',
    backgroundSize: 'cover'
};

const stylelo = {
    width: '100%',
    height: '660px',
    backgroundImage: `url(${backgroundIMG})`,
    backgroundSize: 'cover'
};


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // sessionKey : "#",
            userId: "#",
            username: "#",
            isLoggedIn: false,
            currentPage: "mainpage"
        }
        this.setLoginInfo = this.setLoginInfo.bind(this)
        this.setPage = this.setPage.bind(this)
        this.selectRendering = this.selectRendering.bind(this)
    }

    setLoginInfo(args) {
        console.log("Before")
        console.log(this.state.userId)
        console.log(this.state.username)
        console.log(this.state.isLoggedIn)
        this.setState({
            userId: args.userId,
            username: args.username,
            isLoggedIn: args.isLoggedIn,
            currentPage: args.page
        })
        this.forceUpdate()
        console.log("After")
        console.log(this.state.userId)
        console.log(this.state.username)
        console.log(this.state.isLoggedIn)
        console.log("--------")
    }

    setPage(page) {
        this.setState({ currentPage: page })
    }

    componentDidMount() {
        if (this.state.userId === "#") {
            this.setState({ isLoggedIn: false })
        } else {
            this.setState({ isLoggedIn: true })
        }
    }


    selectRendering() {
        console.log("is")
        console.log(this.state.isLoggedIn)
        console.log("C Page")
        console.log(this.state.currentPage)

        let navbar;
        let page;
        if (this.state.isLoggedIn == true) {

            navbar = <NavBarli
                setPage={this.setPage}
                userId={this.state.userId}
                setLoginInfo={this.setLoginInfo} />
            switch (this.state.currentPage) {
                case "Patient":
                    page = <Patient
                        setPage={this.setPage}
                        userId={this.state.userId}
                        username={this.state.username} />
                    break

                case "Appointments":
                    page = <Appointments
                        setPage={this.setPage}
                        userId={this.state.userId}
                        username={this.state.username} />
                    break

                case "Disease":
                    page = <Disease
                        setPage={this.setPage}
                        userId={this.state.userId}
                        username={this.state.username} />
                    break

                case "HomePage":
                    page = <HomePage
                        setPage={this.setPage}
                        userId={this.state.userId}
                        username={this.state.username} />
                    break

                default:
                    page = <HomePage
                        userId={this.state.userId}
                        username={this.state.username} />
                    break

            }
            return (
                <div>
                    {navbar}
                    {page}
                </div>
            )
        }
        else {
            navbar = <NavBarlo setPage={this.setPage} />
            switch (this.state.currentPage) {
                case "login":
                    page = <Login setLoginInfo={this.setLoginInfo} />
                    break
                case "signup":
                    page = <Signup setPage={this.setPage} />
                    break
                default:
                    page = <Home />
                    break
            }
            return (
                <div>
                    {navbar}
                    {page}
                </div>
            )
        }

    }

    render() {
        return (
            // <div style={stylelo} >
            //     {this.selectRendering()}
            // </div>
            <div style={this.state.isLoggedIn ? styleli : stylelo}>
                {this.selectRendering()}
            </div>
        )
    }

}
export default MainPage;