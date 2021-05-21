//if[Calendar]
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';


import React, { Component } from 'react'


class Calendar extends Component {
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
                <ScheduleComponent>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                </ScheduleComponent>;
            </div>
        )
    }

}
export default Calendar;
//endif[Calendar]