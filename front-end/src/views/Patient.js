import { Component } from "react";
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
    Container
} from 'reactstrap';
import axios from 'axios';
import { registerPatient } from '../models/patientFun';

import { forwardRef } from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};



class Patient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: props.userId,
            username: props.username,
            patients: [],
            firstNamePatient: "",
            lastNamePatient: "",
            age: "",
            history: "",
            location: "",
            gender: ""
        }
        this.canBeSubmitted = this.canBeSubmitted.bind(this)
        this.clearForm = this.clearForm.bind(this)
    }


    clearForm() {
        this.setState({
            firstNamePatient: "",
            lastNamePatient: "",
            age: "",
            history: "",
            location: "",
            gender: ""
        })
    }

    addPatient = (evt) => {
        evt.preventDefault()
        // if (this.canBeSubmitted()) {
        registerPatient(this.state.userId,
            this.state.firstNamePatient,
            this.state.lastNamePatient,
            this.state.age,
            this.state.history,
            this.state.location,
            this.state.gender)
        // }

    }


    componentDidMount() {
        console.log("patients")
        console.log(this.state.userId)
        let l = [];
        axios({
            method: 'post',
            url: `${'http://localhost:5000/api/values/showPatients'}`,
            data: {
                userId: this.state.userId
            }
            ,
        })
            .then(
                (resp) => {
                    if (resp.data.status == "Success") {
                        console.log("right")
                        console.log(resp.data)
                        this.setState(this.state.patients = resp.data.data)
                        console.log("pat")
                    } else {
                        console.log(resp.data)
                    }
                }
                , (err) => {
                    console.log("err")
                    alert(err)
                }
            )
        this.forceUpdate()
    }



    canBeSubmitted() {
        return (
            this.state.userId.length > 0
            && this.state.firstNamePatient.length > 0
            && this.state.lastNamePatient.length > 0
            && this.state.age.length > 0
            && this.state.history.length > 0
            && this.state.location.length > 0
            && this.state.gender.length > 0
        )
    }

    render() {
        return (
            <Container className="mt-5 p-2">
                {/* <div className="signupPatientContainer" class="shadow p-3 mb-5 bg-white rounded">
                    <Form >
                        <FormGroup row>
                            <Label sm={4}>firstName</Label>
                            <Col sm={5}>
                                <Input type="text"
                                    value={this.state.firstNamePatient}
                                    onChange={(evt) => { this.setState({ firstNamePatient: evt.target.value }) }} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={4} >lastName</Label>
                            <Col sm={5}>
                                <Input type="text"
                                    value={this.state.lastNamePatient}
                                    onChange={(evt) => { this.setState({ lastNamePatient: evt.target.value }) }} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={4}>Gender</Label>
                            <Col sm={5}>
                                <Input type="text"
                                    value={this.state.gender}
                                    onChange={(evt) => { this.setState({ gender: evt.target.value }) }} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={4}>Age</Label>
                            <Col sm={5}>
                                <Input type="number"
                                    value={this.state.age}
                                    onChange={(evt) => { this.setState({ age: evt.target.value }) }} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={4}>Location</Label>
                            <Col sm={5}>
                                <Input type="text"
                                    value={this.state.location}
                                    onChange={(evt) => { this.setState({ location: evt.target.value }) }} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={4}>History</Label>
                            <Col sm={5}>
                                <Input type="text"
                                    value={this.state.history}
                                    onChange={(evt) => { this.setState({ history: evt.target.value }) }} />
                            </Col>
                        </FormGroup>
                    </Form>
                    <ButtonToggle className="signupPatientBtn" type="submit"
                        style={{ float: 'right' }}
                        onClick={this.addPatient} >Add</ButtonToggle>
                </div> */}
                <Row>
                    <div style={{ maxWidth: '100%' }}>
                        <MaterialTable
                            icons={tableIcons}
                            options={{
                                rowStyle: {
                                    backgroundColor: '#EEE',
                                },
                                exportButton: true,
                                filtering: true,
                                actionsColumnIndex: -1
                            }}
                            editable={{
                                onRowAdd: newData =>
                                    new Promise((resolve, reject) => {
                                        setTimeout(() => {
                                            alert('add')
                                            console.log(newData);
                                            if (
                                                newData.firstNamePatient.length > 0
                                                && newData.lastNamePatient.length > 0
                                                && newData.history.length > 0
                                                && newData.location.length > 0
                                                && newData.gender.length > 0
                                            ) {
                                                registerPatient(this.state.userId,
                                                    newData.firstNamePatient,
                                                    newData.lastNamePatient,
                                                    newData.age,
                                                    newData.history,
                                                    newData.location,
                                                    newData.gender)
                                                this.componentDidMount();
                                            }
                                            else{
                                                alert("required fields")
                                            }
                                            resolve();
                                        }, 1000)
                                    }),
                            }
                            }
                            actions={[
                                rowData => ({
                                    icon: () => <DeleteOutline />,
                                    tooltip: 'Delete User',
                                    onClick: (event, rowData) => alert("You want to delete " + rowData.firstNamePatient)
                                })
                            ]}
                            columns={[
                                { title: 'FirstName', field: 'firstNamePatient' },
                                { title: 'LastName', field: 'lastNamePatient' },
                                { title: 'Gender', field: 'gender' },
                                { title: 'Age', field: 'age', type: 'numeric' },
                                { title: 'Location', field: 'location' },
                                { title: 'History', field: 'history' }
                            ]}
                            data={this.state.patients}
                            title="Liste des patients"
                        />
                    </div>

                </Row>
            </Container>
        )
    }

}
export default Patient;