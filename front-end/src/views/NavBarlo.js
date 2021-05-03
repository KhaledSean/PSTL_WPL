import React, { Component } from 'react';
import {
    NavbarBrand,
    Navbar,
    Button
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class NavBarlo extends Component{

    constructor(props){
        super(props);
        this.state={str : ""}
    }



    render(){
        return(
            <div >
                <Navbar className="nav" color="dark" dark expand="md">
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
                </Navbar>
        </div>
        )
    }
}
export default NavBarlo;