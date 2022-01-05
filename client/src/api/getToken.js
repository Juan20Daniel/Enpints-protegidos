const url = "http://localhost:3001/api/get-token";

export function getTokenApi() {
    fetch(url,{
        method:'GET',
        headers: {
            "Content-Type":"application/json"
        }
    }).then(response => {
        if(response.status !== 200) {
            console.log(response);
        } else {
            return response.json();
        }
    }).then(data => {
        const { token } = data;
        localStorage.setItem('token', token);
        }).catch((err) => {
        console.log(err);
    })
}