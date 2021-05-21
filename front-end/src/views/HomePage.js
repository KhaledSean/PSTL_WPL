import React, { Component } from 'react';
import './homePage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //if[Calendar]
            isCalendar: true,
            //endif[Calendar]
            //if[Report]
            isReport: true,
            //endif[Report]
            userId: props.userId,
            username: props.username
        }

    }


    //if[Calendar]
    getCalendar() {
        const isCalendar = this.state.isCalendar;
        if (isCalendar) {
            return (<div className="col-12 col-sm-6 col-md-4 image-grid-item" onClick={(evt) => this.props.setPage("Calendar")}>
                <div className="image-grid-cover Calendar">
                    <div className="a image-grid-clickbox"></div>
                    <div className="a cover-wrapper">Calendar</div>
                </div>
            </div>)
        }
        return (<div></div>)
    }
    //endif[Calendar]

    //if[Report]
    getReport() {
        const isReport = this.state.isReport;
        if (isReport) {
            return (<div className="col-12 col-sm-6 col-md-4 image-grid-item" onClick={(evt) => this.props.setPage("Report")}>
                <div className="image-grid-cover Report">
                    <div className="a image-grid-clickbox"></div>
                    <div className="a cover-wrapper">Reports</div>
                </div>
            </div>)
        }
        return (<div></div>)
    }
    //endif[Report]

    render() {
        return (
            <div>
                <div className="container mt-5">

                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 image-grid-item" onClick={(evt) => this.props.setPage("Patient")}>
                            <div className="image-grid-cover Patient">
                                <div className="a image-grid-clickbox"></div>
                                <div className="a cover-wrapper">Patients</div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 image-grid-item" onClick={(evt) => this.props.setPage("Disease")}>
                            <div className="image-grid-cover Disease">
                                <div className="a image-grid-clickbox"></div>
                                <div className="a cover-wrapper">Diseases</div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 image-grid-item" onClick={(evt) => this.props.setPage("Appointments")}>
                            <div className="image-grid-cover Appointments">
                                <div className="a image-grid-clickbox"></div>
                                <div className="a cover-wrapper">Appointments</div>
                            </div>
                        </div>

                        {
                            //if[Calendar]
                            this.getCalendar()
                            //endif[Calendar]
                        }
                        {
                            //if[Report]
                            this.getReport()
                            //endif[Report]
                        }

                    </div>
                </div>

            </div>
        )
    }
}
export default HomePage;