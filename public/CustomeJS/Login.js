const baseUrl = 'http://localhost:3000/';
$(document).ready(function(){
    $('.Login').on('submit', (e)=>{
        e.preventDefault();
        userLogin();
    })
})

async function userLogin() {
    try {
        const dataArr = $('.Login').serializeArray();

        let data = {};
        for (key of dataArr) {
            data[key.name] = key.value;
        }

        console.log(data)
        const URL = baseUrl + 'users/login';
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json"
            }
        }
        let response = await fetch(URL, options);
        response = await response.json();
        if(response.status == 200){
            window.location.href = baseUrl+'dashboard';
        }
    } catch (error) {
        console.log(error)
    }
}
