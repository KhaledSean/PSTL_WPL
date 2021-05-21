import { callApiDelete, callApiPost } from "../callApi/customCallApi";

var data;
export function registerPatient(idDoctorP,
    firstNamePatientP,
    lastNamePatientP,
    ageP,
    historyP,
    locationP,
    genderP) {
        console.log("idDoctorP")
        console.log(idDoctorP)
    const data = {
        idDoctor: idDoctorP,
        firstNamePatient: firstNamePatientP,
        lastNamePatient: lastNamePatientP,
        age: ageP,
        history: historyP,
        location: locationP,
        gender: genderP,
    }
    return callApiPost('values/addPatient', data)
}

export function deletePatient(idPatientP) {
        console.log("idPatientP")
        console.log(idPatientP)
    const data = {
        idPatient: idPatientP}
    return callApiDelete('values/deletePatient', data)
}