import React, { Component } from 'react';
import axios from 'axios';
import Login from './Login';
import Signup from './Signup';
import NavBarlo from './NavBarlo';
import {
    NavbarBrand,
    Navbar,
    Button
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/mycssfile.css';



const stylelo = {
    width: '100%',
    height: '660px',
    backgroundSize: 'cover'  
  };


class MainPage extends Component{
    constructor(props){
        super(props);
        this.state={
            sessionKey : "#",
            userId : "#",
            username : "#",
            isLoggedIn : false,
            currentPage : "mainpage"
        }
        this.setLoginInfo=this.setLoginInfo.bind(this)
        this.setPage=this.setPage.bind(this)
        this.selectRendering=this.selectRendering.bind(this)
    }

    setLoginInfo(args){
        this.setState({
            userId : args.userId,
            sessionKey : args.sessionKey,
            username : args.username, 
            isLoggedIn : args.isLoggedIn, 
            currentPage : args.page})
        this.forceUpdate()
    }

    setPage(page){
        this.setState({currentPage : page})
    }

    selectRendering(){
        let navbar;
        let page;
            navbar=<NavBarlo setPage={this.setPage}/>
            switch(this.state.currentPage){
                case "login":
                    page=<Login setLoginInfo={this.setLoginInfo}/>
                    break
                case "signup":
                    page=<Signup setPage={this.setPage}/>
                    break
                default:
                    page=<Login/>
                    break
            }
            return(
                <div>
                    {navbar}
                    {page}
                </div>
            )               
        }    

    render(){
        return (
            <div style={stylelo} >
                {/* <Navbar className="nav" color="dark" dark expand="md">
                    <NavbarBrand href="#"                            
                        onClick={(evt)=>this.props.setPage("homepage")}> 
                        Home
                    </NavbarBrand> 
                    <Button 
                        className="ml-auto mr-3" 
                        onClick={(evt)=>this.props.setPage("login")}>
                        Login
                    </Button>
                    <Button 
                        className="mr-3" 
                        onClick={(evt)=>this.props.setPage("signup")}>
                            <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                            Signup
                    </Button>
                </Navbar> */}
        
                {this.selectRendering()}
            </div>
        )
    }
  
}
export default MainPage;