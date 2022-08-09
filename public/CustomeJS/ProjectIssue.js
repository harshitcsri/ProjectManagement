$(document).ready(function(){
    const id = window.location.href;
    const projectId = id.split('=')[1];
    // console.log(projectId)
    console.log(projectId)
    getSingleProject(projectId);
})

async function getSingleProject(id){
    console.log(id)
    const URL = baseUrl + 'users/getProject?_id='+id;
    let response = await fetch(URL);
    response = await response.json();
    console.log(response);
    if(response.status == 200){
        $('#projectName').text(response.data[0].ProjectName)
        $('#projectLead').text(response.data[0].ProjectLead)
    }
}