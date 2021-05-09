import { callApiPost } from "../callApi/customCallApi";

var data;
export function register(first, last, user, pass,
) {
    const data = {
        firstname: first,
        lastname: last,
        username: user,
        password: pass,
    }
    return callApiPost('values/register', data)
}

export function connect(
    user,
    pass
) {
    const data = {
        username: user,
        password: pass
    }
    return callApiPost('values/login', data)
}