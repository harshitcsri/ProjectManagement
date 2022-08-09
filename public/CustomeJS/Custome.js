const baseUrl = 'http://localhost:3000/';

$(document).ready(function(){
    
    $('.projectCard').off().on('click', function(){
       window.location.replace('/projectDetail');
    });

    $('.AddProject').on('submit', (e)=>{
        e.preventDefault();
        saveProject();
    })

    $('.AddUser').on('submit', (e)=>{
        e.preventDefault();
        saveUser();
    })

});

async function saveProject(){
    try{
        const dataArr = $('.AddProject').serializeArray();

        let data = {};
        for(key of dataArr){
            data[key.name] = key.value;
        }

        console.log(data)
        const URL = baseUrl + 'users/saveProject';
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json"
            }
        }
        let response = await fetch(URL, options);
        response = await response.json();
        console.log(response)
        if(response.status !== 200){
            $('.formMsg').text(response.message)
        }else{
            $('.formMsg').text(response.message)
        }
    }catch(error){
        console.log(error)
    }
}

async function saveUser(){
    try{
        const dataArr = $('.AddUser').serializeArray();

        let data = {};
        for(key of dataArr){
            data[key.name] = key.value;
        }

        console.log(data)
        const URL = baseUrl + 'users/saveUser';
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json"
            }
        }
        let response = await fetch(URL, options);
        response = await response.json();
        console.log(response)
        if(response.status !== 200){
            $('.formMsg').text(response.message)
        }else{
            $('.formMsg').text(response.message)
        }
    }catch(error){
        console.log(error)
    }
}