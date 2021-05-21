//if[Report]
import { Component } from "react";
import {
    Container
} from 'reactstrap';
import axios from 'axios';

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
import { registerReport } from "../models/reportFun";

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



class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: props.userId,
            username: props.username,
            report: [],
            reportName: "",
            content: "",
            reference: ""
        }
    }


    componentDidMount() {
        console.log("Report")
        console.log(this.state.userId)
        let l = [];
        axios({
            method: 'post',
            url: `${'http://localhost:5000/api/values/showReports'}`,
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
                        this.setState(this.state.report = resp.data.data)
                        console.log("Reports")
                    } else {
                        console.log(resp.data)
                    }
                }
                , (err) => {
                    console.log("err")
                    alert(err)
                }
            )
        console.log("Fin Report")
        this.forceUpdate()
    }


    render() {
        return (
            <Container className="mt-5 p-2">

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
                                        console.log(newData);
                                        if (
                                            newData.reportName.length > 0
                                            && newData.content.length > 0
                                        ) {
                                            registerReport(this.state.userId,
                                                newData.reportName,
                                                newData.content)
                                            this.componentDidMount();
                                        }
                                        else {
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
                                onClick: (event, rowData) => alert("You want to delete " + rowData.report)
                            })
                        ]}
                        columns={[
                            { title: 'Report', field: 'reportName' },
                            { title: 'Content', field: 'content' }
                        ]}
                        data={this.state.report}
                        title="Reports List"
                    />
                </div>

            </Container>
        )
    }

}
export default Report;
//endif[Report]