import axios from "axios";
var apiUrl = 'http://localhost:5000/api'

export function callApiGet(route) {
    return axios({
        method: 'get',
        url: `${apiUrl}/${route}`
    })
}

export function callApiPost(route, data) {
    return axios({
        method: 'post',
        url: `${apiUrl}/${route}`,
        data: data,
    })
        .then(
            (resp) => {
                if (resp.data.status == "Success") {
                    console.log(resp.data)
                } else {
                    console.log(resp.data)
                }
                alert(resp.data.message)
                // alert.success("It's ok now!");

            }
            , (err) => {
                console.log("err")
                alert(err)
            }
        )
}

export function callApiDelete(route, data) {
    return axios({
        method: 'delete',
        url: `${apiUrl}/${route}`,
        data: data,
    })
}