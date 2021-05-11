import { callApiPost } from "../callApi/customCallApi";

var data;
export function registerAppointment(idDoctorA,
    appointmentTypeA,
    dateA,
    statusA,
    patientNameA,
    timeA,
    prescriptionA,
    diagnosticA,
    commentsA) {
    console.log("idDoctorA")
    console.log(idDoctorA)
    const data = {
        idDoctor: idDoctorA,
        appointmentType:appointmentTypeA,
        date:dateA,
        status:statusA,
        patientName:patientNameA,
        time:timeA,
        prescription:prescriptionA,
        diagnostic:diagnosticA,
        comments:commentsA
    }
    return callApiPost('values/addAppointment', data)
}