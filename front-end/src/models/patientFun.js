import { callApiPost } from "../callApi/customCallApi";

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