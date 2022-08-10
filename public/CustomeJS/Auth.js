$(document).ready(function () {
    getUserDetail();
})

async function getUserDetail() {
    const URL = baseUrl + 'users/getUserDetail?id=' + userId;
    let response = await fetch(URL);
    response = await response.json();
    if(response.status == 200){
        $('#username').text(response.data.name)
    }
}