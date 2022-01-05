const url = "http://localhost:3001/api/get-users";

export function getUsersApi(token) {
    return fetch(url, {
        method:'GET',
        headers: {
            "Content-Type":"application/json",
            Authorization:token
        }
    }).then(res => {
        return res.json();
    }).then(data => {
        return data;
    }).catch(err => console.log(err.message));
}