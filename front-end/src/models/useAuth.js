import { callApiPost } from "../callApi/customCallApi";

var data;
export function register(
    user,
    pass,
    first,
    last
) {
    const data = {username:user,
        password:pass,
        firstname:first,
        lastname:last}
    return callApiPost('values/register', data)
}

export function connect(
    user,
    pass
) {
    const data = {username:user,
        password:pass}
    return callApiPost('values/login', data)
}