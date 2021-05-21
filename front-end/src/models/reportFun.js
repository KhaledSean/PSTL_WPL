//if[Report]
import { callApiPost } from "../callApi/customCallApi";

var data;
export function registerReport(idDoctorR,
    reportNameR,
    contentR) {
    console.log("idDoctorR")
    console.log(idDoctorR)
    const data = {
        idDoctor: idDoctorR,
        reportName:reportNameR,
        content:contentR
    }
    return callApiPost('values/addReport', data)
}
//endif[Report]