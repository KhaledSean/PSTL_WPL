import { callApiPost } from "../callApi/customCallApi";

var data;
export function registerDisease(idDoctorD,
    diseaseNameD,
    symptomsD,
    referenceD) {
    console.log("idDoctorD")
    console.log(idDoctorD)
    const data = {
        idDoctor: idDoctorD,
        diseaseName:diseaseNameD,
        symptoms:symptomsD,
        reference:referenceD
    }
    return callApiPost('values/addDisease', data)
}