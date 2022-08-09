const baseUrl = 'http://localhost:3000/';

$(document).ready(function () {

    $('.AddProject').on('submit', (e) => {
        e.preventDefault();
        saveProject();
    })

    $('.AddUser').on('submit', (e)=>{
        e.preventDefault();
        saveUser();
    })

    getAllProjects();
    const id = window.location.href
    console.log(id.split('?'));
});

$(document).ajaxComplete(function(){
    // $('.projectCard').off().on('click', function () {
    //     window.location.replace('/projectDetail');
    // });
})

async function saveProject() {
    try {
        const dataArr = $('.AddProject').serializeArray();

        let data = {};
        for (key of dataArr) {
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
        if (response.status !== 200) {
            $('.formMsg').text(response.message)
        } else {
            $('.formMsg').text(response.message)
        }
    } catch (error) {
        console.log(error)
    }
}

// async function getOneProject(projectId){
//     const URL = baseUrl + 'users/getProject?_id='+projectId;
//     let response = await fetch(URL);
//     response = await response.json();
//     console.log(response)
// }

async function getAllProjects() {
    try {
        const URL = baseUrl + 'users/getProject';
        let response = await fetch(URL);
        response = await response.json();
        console.log(response);
        let templateString = '';
        for (item of response.data) {
            console.log(item)
            templateString += '<div class="col-xl-3 col-md-6 mb-4">'+
                '<div class="card border-left-success shadow h-100 py-2">'+
                    '<div class="card-body">'+
                        '<div class="row no-gutters align-items-center">'+
                            '<div class="col mr-2">'+
                                '<div class="text-xs font-weight-bold text-primary text-uppercase mb-1">'+
                                '<a href="/projectDetail?id='+item._id+'">'+item.ProjectLead+ '</a></div>'+
                                '<div class="h5 mb-0 font-weight-bold text-gray-800">'+item.ProjectName+'</div>'+
                            '</div>'+
                            '<div class="col-auto">'+
                                '<i class="fas fa-calendar fa-2x text-gray-300"></i>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>';

            $('#ProjectCardsDisplay').html(templateString)
        }
    } catch (error) {
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